#!/usr/bin/env python3
"""
PolyTrack Local Server
Serves the game, web wrapper, and local mock API endpoints for offline local play.
No network requests ever leave your computer.
"""

import http.server
import socketserver
import os
import sys
import json
import urllib.parse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(DIRECTORY, 'data')
os.makedirs(DATA_DIR, exist_ok=True)

class PolyTrackHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def guess_type(self, path):
        if path.endswith('.wasm'):
            return 'application/wasm'
        elif path.endswith('.glb'):
            return 'model/gltf-binary'
        elif path.endswith('.gltf'):
            return 'model/gltf+json'
        elif path.endswith('.woff2'):
            return 'font/woff2'
        elif path.endswith('.woff'):
            return 'font/woff'
        elif path.endswith('.ogg'):
            return 'audio/ogg'
        elif path.endswith('.mp3'):
            return 'audio/mpeg'
        elif path.endswith('.svg'):
            return 'image/svg+xml'
        elif path.endswith('.track'):
            return 'text/plain'
        return super().guess_type(path)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == '/' or path == '':
            self.send_response(302)
            self.send_header('Location', '/app/')
            self.end_headers()
            return

        # Local mock API endpoints
        if path.startswith('/api/'):
            self.handle_api_get(path, urllib.parse.parse_qs(parsed.query))
            return

        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path.startswith('/api/'):
            content_length = int(self.headers.get('Content-Length', 0))
            post_body = self.rfile.read(content_length).decode('utf-8', errors='ignore')
            post_data = urllib.parse.parse_qs(post_body)
            self.handle_api_post(path, post_data)
            return

        self.send_response(404)
        self.end_headers()

    def handle_api_get(self, path, params):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.end_headers()

        if 'leaderboardUserEntry' in path:
            # Current user's rank on track
            resp = {"position": 1, "time": 0, "id": "local_user"}
            self.wfile.write(json.dumps(resp).encode('utf-8'))
        elif 'leaderboard' in path:
            # Track leaderboard response
            resp = {"total": 0, "entries": [], "userEntry": None}
            self.wfile.write(json.dumps(resp).encode('utf-8'))
        elif 'user' in path:
            # User profile response
            resp = {
                "nickname": "Player",
                "countryCode": None,
                "carStyle": "000000",
                "isVerifier": False
            }
            self.wfile.write(json.dumps(resp).encode('utf-8'))
        elif 'recordings' in path or 'iceServers' in path:
            self.wfile.write(b"[]")
        else:
            self.wfile.write(b"{}")

    def handle_api_post(self, path, data):
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.end_headers()
        self.wfile.write(b'{"status":"ok"}')

def run():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), PolyTrackHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}/app/"
        wrapper_url = f"http://localhost:{PORT}/web/"
        print("=" * 60)
        print(" PolyTrack Standalone Local Server")
        print("=" * 60)
        print(f" Game Standalone : {url}")
        print(f" Web Portal      : {wrapper_url}")
        print(f" Local Mock API  : http://localhost:{PORT}/api/")
        print(" Press Ctrl+C to stop the server.")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == '__main__':
    run()
