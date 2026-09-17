/**
 * PolyTrack Standalone - Static & GitHub Pages Adapter
 * Enables full leaderboards, personal records, and offline play when hosted on GitHub Pages
 * or when the backend server is offline.
 */
(function() {
  'use strict';

  const isGitHubPages = window.location.hostname.endsWith('github.io') || window.location.protocol === 'file:';

  // Seed default leaderboard records for Qxyntra tracks and official tracks
  const DEFAULT_LEADERBOARDS = {
    "87e9a1ec056952dfe0c40e403f951ed0d141da731d8fc079b4abd9dc76d99ba7": [
      { id: 1, userId: "usr_qxyntra_creator", nickname: "Qxyntra \uD83D\uDC51", countryCode: "FR", frames: 1380, time: "2026-09-16T18:00:00.000Z", carStyle: "000000", verifiedState: 1, recording: "" },
      { id: 10, userId: "test_player_123", nickname: "PolyChamp", countryCode: "FR", frames: 1420, time: "2026-09-16T18:09:10.000Z", carStyle: "000000", verifiedState: 1, recording: "" },
      { id: 2, userId: "usr_speedy", nickname: "ApexDrifter", countryCode: "US", frames: 1495, time: "2026-09-16T18:15:00.000Z", carStyle: "010203", verifiedState: 1, recording: "" }
    ],
    "a1ed02a4c1ea785c01581d09a831d483ba5236ba6ff10a8ff83ff1e08103fa2e": [
      { id: 3, userId: "usr_qxyntra_creator", nickname: "Qxyntra \uD83D\uDC51", countryCode: "FR", frames: 1540, time: "2026-09-16T18:05:00.000Z", carStyle: "000000", verifiedState: 1, recording: "" }
    ],
    "06a6ffd69d46391c8a3561cc938c474f762d72a9b9bae4a934ed99c07c45c104": [
      { id: 4, userId: "usr_qxyntra_creator", nickname: "Qxyntra \uD83D\uDC51", countryCode: "FR", frames: 1620, time: "2026-09-16T18:10:00.000Z", carStyle: "000000", verifiedState: 1, recording: "" }
    ]
  };

  function getStorageKey(trackId) {
    return 'polytrack_lb_' + trackId;
  }

  function getStoredRecords(trackId) {
    try {
      const stored = localStorage.getItem(getStorageKey(trackId));
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {}

    // Fallback to defaults
    if (DEFAULT_LEADERBOARDS[trackId]) {
      return [...DEFAULT_LEADERBOARDS[trackId]];
    }

    // Default placeholder for official tracks (tracks 0 to 11)
    const tNum = parseInt(trackId, 10) || 1;
    return [
      { id: 100 + tNum, userId: "usr_qxyntra", nickname: "Qxyntra \uD83D\uDC51", countryCode: "FR", frames: 1200 + tNum * 80, time: new Date().toISOString(), carStyle: "000000", verifiedState: 1, recording: "" }
    ];
  }

  function saveRecord(trackId, newRecord) {
    try {
      const records = getStoredRecords(trackId);
      const existingIdx = records.findIndex(r => r.userId === newRecord.userId || r.nickname === newRecord.nickname);
      if (existingIdx !== -1) {
        if (newRecord.frames < records[existingIdx].frames) {
          records[existingIdx] = newRecord;
        }
      } else {
        records.push(newRecord);
      }
      records.sort((a, b) => a.frames - b.frames);
      localStorage.setItem(getStorageKey(trackId), JSON.stringify(records));
      return records;
    } catch (e) {
      console.warn('[StaticAdapter] Failed to save record to localStorage:', e);
      return [];
    }
  }

  // Intercept window.fetch for /api/
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    const urlStr = typeof url === 'string' ? url : (url && url.url) || '';
    if (isGitHubPages && urlStr.includes('/api/')) {
      if (urlStr.includes('/lan/rooms') || urlStr.includes('/rooms')) {
        return Promise.resolve(new Response(JSON.stringify({ rooms: [] }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }));
      }
      if (urlStr.includes('/networkInfo')) {
        return Promise.resolve(new Response(JSON.stringify({
          localIp: 'GitHub Pages (En Ligne)',
          wanIp: 'qyxntra.github.io',
          isStatic: true
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }));
      }
    }
    return originalFetch.apply(this, arguments);
  };

  // Intercept XMLHttpRequest for /api/
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function(method, url, async, user, password) {
    this._url = url;
    this._method = method;
    return originalOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function(body) {
    const url = this._url || '';
    if (isGitHubPages && url.includes('/api/')) {
      const lbMatch = url.match(/\/api\/v\d+\/leaderboards\/tracks\/([a-zA-Z0-9_\-]+)/);
      if (lbMatch) {
        const trackId = lbMatch[1];
        const records = getStoredRecords(trackId);
        const responseData = {
          total: records.length,
          entries: records,
          userEntry: null,
          userRank: null
        };
        setTimeout(() => {
          Object.defineProperty(this, 'readyState', { value: 4, writable: true });
          Object.defineProperty(this, 'status', { value: 200, writable: true });
          Object.defineProperty(this, 'responseText', { value: JSON.stringify(responseData), writable: true });
          Object.defineProperty(this, 'response', { value: JSON.stringify(responseData), writable: true });
          if (typeof this.onreadystatechange === 'function') this.onreadystatechange();
          if (typeof this.onload === 'function') this.onload();
        }, 20);
        return;
      }

      if (url.includes('/leaderboards/submit')) {
        try {
          const parsedUrl = new URL(url, window.location.href);
          const trackId = parsedUrl.searchParams.get('trackId') || 'unknown';
          const frames = parseInt(parsedUrl.searchParams.get('frames'), 10) || 1500;
          const nickname = parsedUrl.searchParams.get('nickname') || 'Pilote';
          const carStyle = parsedUrl.searchParams.get('carStyle') || '000000';
          const recording = parsedUrl.searchParams.get('recording') || '';

          const newRecord = {
            id: Date.now(),
            userId: 'usr_local_' + Math.random().toString(36).substring(2, 8),
            nickname: nickname,
            countryCode: 'FR',
            frames: frames,
            time: new Date().toISOString(),
            carStyle: carStyle,
            verifiedState: 1,
            recording: recording
          };
          saveRecord(trackId, newRecord);

          setTimeout(() => {
            Object.defineProperty(this, 'readyState', { value: 4, writable: true });
            Object.defineProperty(this, 'status', { value: 200, writable: true });
            Object.defineProperty(this, 'responseText', { value: "1", writable: true });
            Object.defineProperty(this, 'response', { value: 1, writable: true });
            if (typeof this.onreadystatechange === 'function') this.onreadystatechange();
            if (typeof this.onload === 'function') this.onload();
          }, 20);
          return;
        } catch (e) {
          console.error('[StaticAdapter] Error handling submit:', e);
        }
      }

      if (url.includes('/leaderboards/user-entry')) {
        setTimeout(() => {
          Object.defineProperty(this, 'readyState', { value: 4, writable: true });
          Object.defineProperty(this, 'status', { value: 200, writable: true });
          Object.defineProperty(this, 'responseText', { value: "null", writable: true });
          Object.defineProperty(this, 'response', { value: null, writable: true });
          if (typeof this.onreadystatechange === 'function') this.onreadystatechange();
          if (typeof this.onload === 'function') this.onload();
        }, 20);
        return;
      }

      if (url.includes('/leaderboards/recordings')) {
        setTimeout(() => {
          Object.defineProperty(this, 'readyState', { value: 4, writable: true });
          Object.defineProperty(this, 'status', { value: 200, writable: true });
          Object.defineProperty(this, 'responseText', { value: "[]", writable: true });
          Object.defineProperty(this, 'response', { value: [], writable: true });
          if (typeof this.onreadystatechange === 'function') this.onreadystatechange();
          if (typeof this.onload === 'function') this.onload();
        }, 20);
        return;
      }
    }

    return originalSend.apply(this, arguments);
  };

  console.log('[PolyTrack] Static & GitHub Pages Adapter ready: https://qyxntra.github.io/polytrack-standalone/');
})();
