// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env': {}, // Define un objeto vacío para `process.env`
  },
});
