const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 8080;
const ROOT_DIR = __dirname;

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
    if (pathname.includes('leaderboardUserEntry')) {
      res.end(JSON.stringify({ position: 1, time: 0, id: 'local_user' }));
    } else if (pathname.includes('leaderboard')) {
      res.end(JSON.stringify({ total: 0, entries: [], userEntry: null }));
    } else if (pathname.includes('user')) {
      res.end(JSON.stringify({ nickname: 'Player', countryCode: null, carStyle: '000000', isVerifier: false }));
    } else if (pathname.includes('recordings') || pathname.includes('iceServers')) {
      res.end('[]');
    } else {
      res.end('{"status":"ok"}');
    }
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
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

server.listen(PORT, () => {
  console.log(`PolyTrack Standalone Dev Server running at http://localhost:${PORT}/`);
  console.log(`Standalone Game : http://localhost:${PORT}/app/`);
  console.log(`Web Portal      : http://localhost:${PORT}/web/`);
  console.log(`Local Mock API  : http://localhost:${PORT}/api/`);
});
