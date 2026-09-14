# PolyTrack - Reverse Engineering & Local Environment

Projet de rétro-ingénierie, d'analyse technique et d'environnement local pour le jeu web **PolyTrack** (créé par [Kodub](https://www.kodub.com/apps/polytrack)).

---

## 📊 Analyse Technique du Site et du Jeu

Le jeu PolyTrack repose sur une architecture moderne de jeu web 3D optimisée pour les performances et la latence :

### 1. Structure du Portail Web (`web/`)
- **URL d'origine** : `https://www.kodub.com/apps/polytrack`
- **Rôle** : Wrapper responsive et conteneur d'affichage.
- **Intégration** : Utilise une balise `<iframe>` sécurisée avec bac à sable (`sandbox="allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox allow-pointer-lock allow-downloads"`).
- **Communication inter-fenêtres** : Synchronisation des états et de l'historique d'URL (`window.history.replaceState`) via `window.addEventListener('message')`.
- **Verrouillage du curseur (Pointer Lock)** : Activé pour permettre le contrôle caméra et voiture fluide.

### 2. Moteur de Jeu et Rendu 3D (`app/`)
- **Moteur Graphique** : [Three.js](https://threejs.org/) (intégré dans `main.bundle.js`, module `9437.js`).
- **Modèles 3D** : Formats GLTF / GLB compacts (`models/car.glb`, `models/road.glb`, `models/blocks.glb`, `models/wall_track.glb`, etc.).
- **Polices et Typographie** : Police personnalisée basse résolution `forced_square.woff2`.
- **Interface Utilisateur (HUD & Menus)** : Système d'éléments DOM légers superposés au canevas WebGL (`#ui`, `#transition-layer`).

### 3. Moteur Physique WebAssembly & Web Worker (`polytrack_physics.wasm`)
- **WASM Engine** : Moteur de simulation physique compilé en WebAssembly (`polytrack_physics.wasm`, ~396 Ko).
- **Worker Dédié** : `simulation_worker.bundle.js` exécute la physique et la détection de collisions hors du thread principal afin de garantir un framerate stable à 60/120+ FPS.
- **Bridge JS/WASM** : `lib/polytrack_physics.js` (généré avec Emscripten).

### 4. Éditeur de Circuit & Encodage des Pistes
- Module de sérialisation binaire (décompilé dans `src/main/11.js`) capable d'encoder et décoder les circuits sous forme de chaînes compactes (pistes de la communauté et circuits officiels).
- Éditeur 3D complet avec grille de placement dynamique et rotations 3 axes (X, Y, Z).

---

## 📁 Organisation du Répertoire

```text
Game/
├── app/                               # Client autonome du jeu (exécutable hors-ligne)
│   ├── index.html                     # Lanceur du jeu WebGL
│   ├── main.bundle.js                 # Bundle principal de l'application
│   ├── simulation_worker.bundle.js    # Worker Web pour la physique du véhicule
│   ├── error_screen.bundle.js         # Écran de gestion des erreurs
│   ├── polytrack_physics.wasm         # Moteur physique compilé WebAssembly
│   ├── lib/
│   │   └── polytrack_physics.js       # Wrapper Emscripten
│   ├── forced_square.woff2            # Police du jeu
│   ├── manifest.json                  # Manifest PWA
│   ├── audio/                         # Effets sonores et musiques (engine, tires, collision, music...)
│   ├── models/                        # Modèles 3D GLTF/GLB (voiture, routes, obstacles, décors...)
│   ├── images/                        # Icônes SVG, textures de fumée et illustrations
│   └── tracks/                        # Vignettes des circuits officiels et communautaires
│
├── web/                               # Portail web d'origine (kodub.com/apps/polytrack)
│   ├── index.html                     # Page d'accueil encapsulant le jeu
│   ├── css/
│   │   └── app.css                    # Feuilles de styles du portail
│   ├── favicon/                       # Icônes d'application
│   └── images/                        # Visuel OpenGraph et médias
│
├── src/                               # Code source décompilé, désobfusqué et unminified
│   ├── module_catalog.json            # Index classifié des 211 modules extraits
│   ├── main/                          # 211 modules Webpack unbundlés + deobfuscated.js (66k lignes)
│   ├── simulation_worker/             # Modules unbundlés du worker physique
│   └── error_screen/                  # Modules unbundlés de l'écran d'erreur
│
├── serve.py                           # Serveur HTTP local autonome en Python (zéro dépendance)
├── server.js                          # Serveur HTTP de développement pour Node.js
├── package.json                       # Scripts npm pour exécuter ou ré-extraire les modules
├── .gitignore                         # Règles d'exclusion Git
└── README.md                          # Documentation du projet
```

---

## 🚀 Démarrage Rapide

Vous pouvez lancer le serveur local immédiatement soit avec **Python**, soit avec **Node.js** :

### Option 1 : Avec Python (recommandé, aucune dépendance requise)
```bash
python serve.py
```
Le serveur démarrera sur le port 8080 :
- **Jeu autonome (Plein écran)** : [http://localhost:8080/app/](http://localhost:8080/app/)
- **Portail Kodub original** : [http://localhost:8080/web/](http://localhost:8080/web/)

*(Optionnel : vous pouvez spécifier un autre port, ex: `python serve.py 3000`)*

### Option 2 : Avec Node.js
```bash
npm start
```
ou
```bash
node server.js
```

---

## 🔍 Modules Clés Décompilés (`src/main/`)

| Module | Rôle & Description |
| :--- | :--- |
| **`deobfuscated.js`** | Fichier complet désobfusqué (66 686 lignes de code JavaScript propre et lisible). |
| **`9437.js`** | Moteur de rendu 3D Three.js, shaders personnalisés, gestion des lumières et de la caméra. |
| **`4922.js`** | Boucle de jeu principale, contrôleur de véhicule, gestion des collisions et inputs. |
| **`3075.js`** | Définition des blocs de circuit, géométries procédurales et système de virages/loopings. |
| **`11.js`** | Décodeur et encodeur binaire des pistes (slopes, pillars, planes, checkpoints). |
| **`7888.js`** | Système audio spatialisé Web Audio API (gestion du régime moteur, crissement des pneus). |
| **`641.js`** | Interface utilisateur (HUD, chronomètre, tableau de bord, contrôles de course). |
| **`8185.js`** & **`6762.js`** | Moteur de l'éditeur de circuit (grille de construction, sélection, undo/redo). |

---

## 📜 Historique Git Local

Le dépôt a été initialisé avec une branche `main` et structuré en commits logiques pour faciliter le versionnement :
1. `Initial commit: Project structure, dev servers, and configuration`
2. `feat(assets): Download complete PolyTrack web game assets and portal files`
3. `feat(decompile): Unpack, deobfuscate, and catalogue Webpack 5 modules`
