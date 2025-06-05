import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  build: {
rollupOptions: {
  input: {
    main: resolve(__dirname,'index.html'),
    about: resolve(__dirname,'about.html'),
    blog: resolve(__dirname,'blog.html'),
    contact: resolve(__dirname,'contact.html'),
    home: resolve(__dirname,'home.html'),
  }
}
  },
  plugins: [
    tailwindcss(),
  ],
})