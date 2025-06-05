import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about.html'),
        blog: path.resolve(__dirname, 'blog.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        home: path.resolve(__dirname, 'home.html'),
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
});
