#!/usr/bin/env python3
"""
PolyTrack Standalone Server with LAN / WAN support.
"""

import http.server
import socketserver
import os
import sys
import json
import socket
import urllib.parse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"

LOCAL_IP = get_local_ip()

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

        if 'networkInfo' in path:
            resp = {
                "localIp": LOCAL_IP,
                "port": PORT,
                "lanUrl": f"http://{LOCAL_IP}:{PORT}/app/"
            }
            self.wfile.write(json.dumps(resp).encode('utf-8'))
        elif 'iceServers' in path:
            # Return Google STUN servers for WebRTC NAT traversal (WAN & LAN)
            resp = [
                {"urls": "stun:stun.l.google.com:19302"},
                {"urls": "stun:stun1.l.google.com:19302"},
                {"urls": "stun:stun2.l.google.com:19302"}
            ]
            self.wfile.write(json.dumps(resp).encode('utf-8'))
        elif 'leaderboardUserEntry' in path:
            resp = {"position": 1, "time": 0, "id": "local_user"}
            self.wfile.write(json.dumps(resp).encode('utf-8'))
        elif 'leaderboard' in path:
            resp = {"total": 0, "entries": [], "userEntry": None}
            self.wfile.write(json.dumps(resp).encode('utf-8'))
        elif 'user' in path:
            resp = {
                "nickname": "Player",
                "countryCode": None,
                "carStyle": "000000",
                "isVerifier": False
            }
            self.wfile.write(json.dumps(resp).encode('utf-8'))
        elif 'recordings' in path:
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
    with socketserver.TCPServer(("0.0.0.0", PORT), PolyTrackHTTPRequestHandler) as httpd:
        print("=" * 60)
        print(" PolyTrack Standalone Local Server")
        print("=" * 60)
        print(f" Localhost URL : http://localhost:{PORT}/app/")
        print(f" LAN Web URL   : http://{LOCAL_IP}:{PORT}/app/")
        print(f" Web Portal    : http://localhost:{PORT}/web/")
        print(" Press Ctrl+C to stop the server.")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == '__main__':
    run()
