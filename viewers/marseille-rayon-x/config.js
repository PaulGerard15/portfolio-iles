/*
  Réglages de la vue « rayon X ».

  ⚠ Ce jeton est lisible par tout visiteur une fois le site publié (c'est le cas de tout jeton côté navigateur).
     Avant publication : créer sur ion.cesium.com › Access Tokens un jeton DÉDIÉ,
     - portée lecture seule (assets:read),
     - « Allowed URLs » limitées à https://<utilisateur>.github.io et http://localhost,
     puis le coller ici. Ne pas publier le jeton par défaut du compte.
*/
window.RAYON_X_CONFIG = {
  ionToken: window.CESIUM_ION_TOKEN || '',
  // N° d'asset Cesium ion de la dalle LiDAR HD (null = bâtiments OSM en attendant)
  lidarAssetId: null,
  // Correction altitude NGF-IGN69 → ellipsoïde, en mètres (~50 à Marseille, à ajuster)
  lidarHeightOffset: 50,
};
