import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';

// Served from the custom domain root (yercaudclub.com). Set SITE_BASE for a subpath preview build.
// Generate a real page so direct links work on static hosts without SPA rewrites.
export default defineConfig({
  base: process.env.SITE_BASE || '/',
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        facilities: fileURLToPath(new URL('./facilities/index.html', import.meta.url)),
        affiliations: fileURLToPath(new URL('./affiliated-clubs/index.html', import.meta.url)),
        history: fileURLToPath(new URL('./history/index.html', import.meta.url)),
      },
    },
  },
});
