import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';

// Generate a real page so direct links work on static hosts without SPA rewrites.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        facilities: fileURLToPath(new URL('./facilities/index.html', import.meta.url)),
        affiliations: fileURLToPath(new URL('./affiliated-clubs/index.html', import.meta.url)),
      },
    },
  },
});
