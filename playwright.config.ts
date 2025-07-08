import { defineConfig } from '@playwright/test'; // Importation de la fonction de configuration depuis Playwright

export default defineConfig({ // Exportation de la configuration par défaut du projet
  use: {
    headless: true, // Mode sans interface graphique (les tests s'exécutent en arrière-plan)
    viewport: { width: 1280, height: 720 },  // Taille de la fenêtre du navigateur simulé
    baseURL: 'https://example.com',   // URL de base utilisée dans les tests
  },
  testDir: 'tests',   // Dossier où se trouvent les fichiers de test
});
