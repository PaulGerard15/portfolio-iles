# Ressources

Tout ce qui est placé dans `public/` est copié tel quel dans le site publié.
Dans la configuration, les chemins s'écrivent **sans `/` initial** et relatifs à `public/` :
`assets/projets/mon-projet/vol-01.jpg`.

## Arborescence

```
public/assets/
├── projets/<id-projet>/      ← vos ressources, un dossier par projet
│   ├── vignette.jpg          ← image principale
│   ├── vol-01.jpg, vol-02.jpg
│   ├── ortho-apercu.jpg
│   └── donnees/              ← GeoJSON, 3D Tiles…
├── placeholders/             ← images « Contenu à remplacer »
└── demo/                     ← données de démonstration (fictives)
```

## Convention de nommage

- minuscules, chiffres et tirets uniquement : `palais-01.jpg`, pas `Palais 01.JPG`
- `<id-projet>` = identique au champ `id` du projet dans `src/config/projects.ts`
- numérotation sur deux chiffres : `-01`, `-02`…

## Poids conseillés

| Type | Format | Taille max conseillée |
|---|---|---|
| Image de fiche | JPEG/WebP, 1600 px de large | 400 Ko |
| Vignette | JPEG/WebP, 800 px | 150 Ko |
| GeoJSON | simplifié (QGIS > Simplifier) | 2 Mo |
| Orthophoto / nuage / maillage | **pas dans le dépôt** → tuiles hébergées (voir docs) | — |

GitHub Pages limite un site à ~1 Go et déconseille les fichiers > 100 Mo.
Ne jamais ajouter de modèle 3D ou d'image dont la licence est inconnue.
