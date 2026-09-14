#!/usr/bin/env python3
"""
PolyTrack Local Server
Serves the game and web wrapper with appropriate MIME types for WebAssembly, GLB models, and audio.
"""

import http.server
import socketserver
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class PolyTrackHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def guess_type(self, path):
        # Ensure correct MIME types for modern web game assets
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
        # Enable CORS and caching headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_GET(self):
        if self.path == '/' or self.path == '':
            self.send_response(302)
            self.send_header('Location', '/app/')
            self.end_headers()
            return
        return super().do_GET()

def run():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), PolyTrackHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}/app/"
        wrapper_url = f"http://localhost:{PORT}/web/"
        print("=" * 60)
        print(" PolyTrack Local Development Server")
        print("=" * 60)
        print(f" Game Standalone : {url}")
        print(f" Web Portal      : {wrapper_url}")
        print(f" Root Directory  : {DIRECTORY}")
        print(" Press Ctrl+C to stop the server.")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == '__main__':
    run()
