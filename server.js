
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const os = require('os');
const WebSocket = require('ws');

const PORT = process.env.PORT || 8080;
const ROOT_DIR = __dirname;

// Persistent Leaderboards & User Data
const LEADERBOARD_FILE = path.join(ROOT_DIR, 'data', 'leaderboard.json');

function loadLeaderboardDB() {
  try {
    if (fs.existsSync(LEADERBOARD_FILE)) {
      return JSON.parse(fs.readFileSync(LEADERBOARD_FILE, 'utf-8'));
    }
  } catch (e) {
    console.error('[LEADERBOARD] Error reading DB:', e.message);
  }
  return { records: {}, users: {}, nextRecordId: 100 };
}

function saveLeaderboardDB(db) {
  try {
    fs.writeFileSync(LEADERBOARD_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (e) {
    console.error('[LEADERBOARD] Error writing DB:', e.message);
  }
}

let lbDB = loadLeaderboardDB();

function getLocalIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal && !net.address.startsWith('169.254')) {
        return net.address;
      }
    }
  }
  return '127.0.0.1';
}

const LOCAL_IP = getLocalIp();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.wasm': 'application/wasm',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.track': 'text/plain',
};

// Rooms registry: inviteCode -> { hostWs, key, clients: Map(sessionId -> clientWs), mode, createdAt }
const rooms = new Map();
let guestSessionCounter = 1;

function generateCode(mode) {
  const prefix = (mode === 'wan') ? 'WAN' : 'LAN';
  const num = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${num}`;
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/' || pathname === '') {
    res.writeHead(302, { Location: '/app/' });
    res.end();
    return;
  }

  // Local mock API router
  if (pathname.startsWith('/api/')) {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

    if (pathname.includes('networkInfo')) {
      res.end(JSON.stringify({
        localIp: LOCAL_IP,
        port: PORT,
        lanUrl: `http://${LOCAL_IP}:${PORT}/app/`,
        activeRooms: Array.from(rooms.keys())
      }));
      return;
    }

    if (pathname.includes('iceServers')) {
      const isWan = parsedUrl.query.mode === 'wan';
      if (isWan) {
        // Public Google STUN servers for WAN traversal
        res.end(JSON.stringify([
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:stun1.l.google.com:19302" },
          { urls: "stun:stun2.l.google.com:19302" }
        ]));
      } else {
        // LAN mode: direct local network candidates, no external STUN needed
        res.end(JSON.stringify([
          { urls: "stun:stun.l.google.com:19302" }
        ]));
      }
      return;
    }

    if (pathname.includes('leaderboardUserEntry')) {
      const trackId = parsedUrl.query.trackId;
      const userHash = parsedUrl.query.userTokenHash;
      const trackRecords = lbDB.records[trackId] || [];
      const userIdx = trackRecords.findIndex(r => r.userId === userHash);
      if (userIdx >= 0) {
        const entry = trackRecords[userIdx];
        res.end(JSON.stringify({
          position: userIdx + 1,
          frames: entry.frames,
          id: entry.id
        }));
      } else {
        res.end('null');
      }
      return;
    }

    if (pathname.includes('leaderboard') && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const params = new URLSearchParams(body);
          const trackId = params.get('trackId');
          const frames = parseInt(params.get('frames'), 10);
          const userToken = params.get('userToken') || 'anon';
          const nickname = params.get('nickname') || 'Player';
          const countryCode = params.get('countryCode') || null;
          const carStyle = params.get('carStyle') || '000000';
          const recording = params.get('recording') || '';

          if (!lbDB.records[trackId]) {
            lbDB.records[trackId] = [];
          }

          const recId = lbDB.nextRecordId++;
          const newEntry = {
            id: recId,
            userId: userToken,
            nickname: nickname,
            countryCode: countryCode,
            frames: frames,
            time: new Date().toISOString(),
            carStyle: carStyle,
            verifiedState: 1,
            recording: recording
          };

          // Update or insert player's best time
          const existingIdx = lbDB.records[trackId].findIndex(r => r.userId === userToken);
          if (existingIdx >= 0) {
            if (frames < lbDB.records[trackId][existingIdx].frames) {
              lbDB.records[trackId][existingIdx] = newEntry;
            }
          } else {
            lbDB.records[trackId].push(newEntry);
          }

          lbDB.records[trackId].sort((a, b) => a.frames - b.frames);
          saveLeaderboardDB(lbDB);

          console.log(`[LEADERBOARD] New record on track ${trackId.substring(0, 8)}...: ${nickname} (${frames} frames)`);
          res.end(JSON.stringify({ uploadId: recId, positionChange: 0 }));
        } catch (e) {
          console.error('[LEADERBOARD] Submit error:', e);
          res.writeHead(500);
          res.end('{"error":"Failed to submit"}');
        }
      });
      return;
    }

    if (pathname.includes('leaderboard')) {
      const trackId = parsedUrl.query.trackId;
      const skip = parseInt(parsedUrl.query.skip, 10) || 0;
      const amount = parseInt(parsedUrl.query.amount, 10) || 10;
      const userHash = parsedUrl.query.userTokenHash;

      const trackRecords = lbDB.records[trackId] || [];
      const userIdx = trackRecords.findIndex(r => r.userId === userHash);

      const pageEntries = trackRecords.slice(skip, skip + amount).map(r => ({
        id: r.id,
        userId: r.userId,
        nickname: r.nickname,
        countryCode: r.countryCode,
        frames: r.frames,
        time: r.time,
        carStyle: r.carStyle,
        verifiedState: r.verifiedState || 1
      }));

      const userEntry = userIdx >= 0 ? {
        position: userIdx + 1,
        frames: trackRecords[userIdx].frames,
        id: trackRecords[userIdx].id
      } : null;

      res.end(JSON.stringify({
        total: trackRecords.length,
        entries: pageEntries,
        userEntry: userEntry
      }));
      return;
    }

    if (pathname.includes('recordings')) {
      const idsStr = parsedUrl.query.ids || '';
      const reqIds = idsStr.split(',').map(s => parseInt(s, 10));
      const results = [];

      for (const tid of Object.keys(lbDB.records)) {
        for (const rec of lbDB.records[tid]) {
          if (reqIds.includes(rec.id)) {
            results.push({
              recording: rec.recording || '',
              time: rec.frames,
              frames: rec.frames,
              verifiedState: rec.verifiedState || 1,
              carStyle: rec.carStyle || '000000'
            });
          }
        }
      }
      res.end(JSON.stringify(results));
      return;
    }

    if (pathname.includes('user')) {
      res.end(JSON.stringify({ nickname: 'Player', countryCode: null, carStyle: '000000', isVerifier: false }));
      return;
    }

    res.end('{"status":"ok"}');
    return;
  }

  let safePath = path.normalize(decodeURI(pathname)).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }
      const headers = { 'Content-Type': contentType };
      if (filePath.endsWith('sw.js')) {
        headers['Service-Worker-Allowed'] = '/app/';
        headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
      }
      res.writeHead(200, headers);
      res.end(content);
    });
  });
});

// WebSocket Signaling Server (for WebRTC LAN and WAN multiplayer)
const wss = new WebSocket.Server({ noServer: true });

server.on('upgrade', (req, socket, head) => {
  const parsed = url.parse(req.url, true);
  if (parsed.pathname.includes('/multiplayer/host') || parsed.pathname.includes('/multiplayer/join')) {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws, req);
    });
  } else {
    socket.destroy();
  }
});

wss.on('connection', (ws, req) => {
  const parsed = url.parse(req.url, true);
  const isHost = parsed.pathname.includes('/multiplayer/host');
  const isJoin = parsed.pathname.includes('/multiplayer/join');
  const mode = parsed.query.mode || 'lan';

  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });
  ws.on('error', (err) => {
    console.warn('[MULTIPLAYER] Client socket error:', err.message);
  });

  // Keep-alive heartbeat ping every 15 seconds
  const pingInterval = setInterval(() => {
    if (ws.readyState === WebSocket.OPEN) {
      if (ws.isAlive === false) {
        clearInterval(pingInterval);
        return ws.terminate();
      }
      ws.isAlive = false;
      ws.ping();
    }
  }, 15000);

  ws.on('close', () => clearInterval(pingInterval));

  if (isHost) {
    handleHost(ws, mode);
  } else if (isJoin) {
    handleJoin(ws);
  }
});

function handleHost(ws, mode) {
  let hostRoomCode = null;

  ws.on('message', (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }

    if (msg.type === 'createInvite') {
      hostRoomCode = generateCode(mode);
      const sessionKey = 'key_' + Math.random().toString(36).substring(2, 10);

      rooms.set(hostRoomCode, {
        hostWs: ws,
        key: sessionKey,
        clients: new Map(),
        mode: mode,
        createdAt: Date.now()
      });

      console.log(`[MULTIPLAYER] Host created room ${hostRoomCode} (${mode.toUpperCase()})`);

      ws.send(JSON.stringify({
        type: 'createInvite',
        inviteCode: hostRoomCode,
        key: sessionKey,
        timeoutMilliseconds: null,
        censoredNickname: null
      }));
      return;
    }

    if (msg.type === 'acceptJoin') {
      const room = rooms.get(hostRoomCode);
      if (!room) return;
      const guestWs = room.clients.get(msg.session);
      if (guestWs && guestWs.readyState === WebSocket.OPEN) {
        console.log(`[MULTIPLAYER] Host accepted session ${msg.session} in room ${hostRoomCode}`);
        guestWs.send(JSON.stringify({
          type: 'acceptJoin',
          answer: msg.answer,
          version: msg.version || '0.6.2',
          nickname: msg.nickname,
          countryCode: msg.countryCode,
          carStyle: msg.carStyle
        }));
      }
      return;
    }

    if (msg.type === 'candidate') {
      const room = rooms.get(hostRoomCode);
      if (!room) return;
      const guestWs = room.clients.get(msg.session);
      if (guestWs && guestWs.readyState === WebSocket.OPEN) {
        guestWs.send(JSON.stringify({
          type: 'candidate',
          candidate: msg.candidate
        }));
      }
      return;
    }

    if (msg.type === 'declineJoin') {
      const room = rooms.get(hostRoomCode);
      if (!room) return;
      const guestWs = room.clients.get(msg.session);
      if (guestWs && guestWs.readyState === WebSocket.OPEN) {
        guestWs.send(JSON.stringify({
          type: 'declineJoin',
          reason: msg.reason || 'HostDeclined'
        }));
        guestWs.close();
      }
      room.clients.delete(msg.session);
      return;
    }
  });

  ws.on('close', () => {
    if (hostRoomCode && rooms.has(hostRoomCode)) {
      console.log(`[MULTIPLAYER] Host closed room ${hostRoomCode}`);
      const room = rooms.get(hostRoomCode);
      for (const [, guestWs] of room.clients) {
        try { guestWs.close(); } catch {}
      }
      rooms.delete(hostRoomCode);
    }
  });
}

function handleJoin(ws) {
  let joinedRoomCode = null;
  let sessionId = null;

  ws.on('message', (raw) => {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }

    if (msg.inviteCode && msg.offer) {
      const code = msg.inviteCode.trim().toUpperCase();
      const room = rooms.get(code);

      if (!room || room.hostWs.readyState !== WebSocket.OPEN) {
        console.log(`[MULTIPLAYER] Join failed: room ${code} not found or host offline`);
        ws.send(JSON.stringify({
          type: 'declineJoin',
          reason: 'InvalidInviteCode'
        }));
        ws.close();
        return;
      }

      joinedRoomCode = code;
      sessionId = 'sess_' + (guestSessionCounter++);
      room.clients.set(sessionId, ws);

      console.log(`[MULTIPLAYER] Guest joining room ${code} (session ${sessionId})`);

      room.hostWs.send(JSON.stringify({
        type: 'joinInvite',
        session: sessionId,
        offer: msg.offer,
        version: msg.version || '0.6.2',
        mods: msg.mods || [],
        isModsVanillaCompatible: true,
        nickname: msg.nickname || 'Player',
        countryCode: msg.countryCode || null,
        carStyle: msg.carStyle || '000000'
      }));
      return;
    }

    if (msg.candidate !== undefined) {
      if (joinedRoomCode && sessionId) {
        const room = rooms.get(joinedRoomCode);
        if (room && room.hostWs.readyState === WebSocket.OPEN) {
          room.hostWs.send(JSON.stringify({
            type: 'candidate',
            session: sessionId,
            candidate: msg.candidate
          }));
        }
      }
      return;
    }
  });

  ws.on('close', () => {
    if (joinedRoomCode && sessionId) {
      const room = rooms.get(joinedRoomCode);
      if (room) {
        room.clients.delete(sessionId);
      }
    }
  });
}

server.listen(PORT, '0.0.0.0', () => {
  console.log("=" .repeat(60));
  console.log(" PolyTrack LAN & WAN Multiplayer Server Active");
  console.log("=" .repeat(60));
  console.log(` Localhost URL : http://localhost:${PORT}/app/`);
  console.log(` LAN Web URL   : http://${LOCAL_IP}:${PORT}/app/`);
  console.log(` Web Portal    : http://localhost:${PORT}/web/`);
  console.log(` Signaling WS  : ws://${LOCAL_IP}:${PORT}/api/v6/multiplayer/`);
  console.log("=" .repeat(60));
});
