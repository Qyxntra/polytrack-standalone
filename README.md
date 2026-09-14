# 🏎️ PolyTrack - Standalone Edition & Local Environment

Édition autonome, complète et 100% hors-ligne du jeu web **PolyTrack** (créé initialement par Kodub), avec support multijoueur **LAN (Réseau Local)** et **WAN (Internet)**, éditeur de circuit, personnalisation (Garage), décodeurs 3D Draco et physique WebAssembly.

---

## 🌐 Liens & Démo en Ligne

- **Jeu en Ligne (GitHub Pages)** : [https://qyxntra.github.io/polytrack-standalone/](https://qyxntra.github.io/polytrack-standalone/)
- **Dépôt GitHub** : [https://github.com/Qyxntra/polytrack-standalone](https://github.com/Qyxntra/polytrack-standalone)

---

## ⚡ Caractéristiques Principales

- **100% Autonome & Hors-Ligne** : Toutes les communications avec les serveurs externes ont été neutralisées et redirigées vers le serveur local. Aucune dépendance externe.
- **Support Multijoueur LAN & WAN** :
  - **LAN (Réseau Local)** : Jouez avec des amis connectés au même réseau Wi-Fi ou Ethernet avec une latence quasi-nulle.
  - **WAN (Internet)** : Jouez à distance via Internet avec le système de négociation WebRTC et serveurs Google STUN publics.
  - **Interface Thématique** : Sélecteur direct [ LAN (Local) ] / [ WAN (Internet) ] intégré au menu de création de partie selon le design d'origine du jeu.
- **Éditeur de Circuits & Garage Complets** :
  - Tous les bundles dynamiques Webpack (112.bundle.js, 604.bundle.js, etc.) sont inclus.
  - Modèle 3D garage.glb, polices orced_square.json et 193 drapeaux nationaux SVG inclus.
- **78 Circuits Officiels & Communautaires** : Tous les circuits .track et leurs vignettes de prévisualisation sont embarqués en local.
- **Physique WebAssembly Haute Performance** : Moteur polytrack_physics.wasm et worker multithreadé dédié.
- **Décodeurs Draco 3D Intégrés** : Rendu optimal des maillages compressés Google Draco en local.

---

## 📁 Organisation du Répertoire

`	ext
Game/
├── app/                               # Client autonome du jeu (exécutable hors-ligne ou sur GitHub Pages)
│   ├── index.html                     # Lanceur principal du jeu WebGL
│   ├── main.bundle.js                 # Bundle principal de l'application
│   ├── 112.bundle.js                  # Module dynamique : Éditeur de circuits
│   ├── 604.bundle.js                  # Module dynamique : Garage & Customisation
│   ├── simulation_worker.bundle.js    # Web Worker pour la simulation physique
│   ├── error_screen.bundle.js         # Écran de gestion des erreurs
│   ├── polytrack_physics.wasm         # Moteur physique compilé en WebAssembly (396 Ko)
│   ├── forced_square.json             # Définitions des glyphes de police pour l'éditeur
│   ├── lib/
│   │   ├── draco/                     # Décodeurs WebAssembly Google Draco (draco_decoder.wasm, wrapper)
│   │   └── polytrack_physics.js       # Wrapper Emscripten
│   ├── models/                        # Modèles 3D GLTF/GLB (car.glb, garage.glb, blocks.glb, etc.)
│   ├── audio/                         # Effets sonores et musique du jeu
│   ├── images/                        # Icônes SVG, drapeaux nationaux et textures
│   └── tracks/                        # 78 circuits officiels et communautaires (.track)
│
├── web/                               # Portail web d'origine
├── src/                               # Code source décompilé, désobfusqué et unminified
│   ├── module_catalog.json            # Index des modules
│   ├── main/                          # 211 modules décompilés du jeu principal
│   ├── editor/                        # Modules décompilés de l'éditeur de circuits
│   └── garage/                        # Modules décompilés du garage
│
├── index.html                         # Redirection automatique vers app/ (pour GitHub Pages)
├── server.js                          # Serveur Node.js complet avec signalement WebSocket Multijoueur
├── serve.py                           # Serveur HTTP local autonome Python
├── package.json                       # Scripts npm
└── README.md                          # Documentation
`

---

## 🚀 Démarrage Local

### Mode Multijoueur Complet (Node.js) - Recommandé

Ce mode active le serveur HTTP local **et** le serveur de signalement WebSocket pour les salons LAN et WAN :

`ash
node server.js
`

Le serveur affichera votre adresse locale :
`	ext
============================================================
 PolyTrack LAN & WAN Multiplayer Server Active
============================================================
 Localhost URL : http://localhost:8080/app/
 LAN Web URL   : http://192.168.1.10:8080/app/
 Signaling WS  : ws://192.168.1.10:8080/api/v6/multiplayer/
============================================================
`

- **Accès sur le PC hôte** : [http://localhost:8080/app/](http://localhost:8080/app/)
- **Accès pour les joueurs sur le même réseau (LAN)** : http://<VOTRE_IP_LOCALE>:8080/app/

### Mode Simple (Python)

Pour jouer en solo / éditeur sans dépendances :
`ash
python serve.py
`

---

## 🎮 Comment Jouer en Multijoueur

1. Lancez 
ode server.js.
2. Ouvrez le jeu sur [http://localhost:8080/app/](http://localhost:8080/app/).
3. Cliquez sur **Multiplayer** puis **Host**.
4. Choisissez le mode :
   - **LAN (Local)** : Le salon génère un code (ex: LAN-1234). Les autres joueurs sur votre réseau local n'ont qu'à entrer ce code pour rejoindre immédiatement.
   - **WAN (Internet)** : Le salon génère un code (ex: WAN-5678) et négocie une connexion WebRTC via Google STUN.
5. Lancez la course !
