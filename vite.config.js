import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // When hosting this repo on GitHub Pages under a project page URL
  // (i.e. https://Soomakee.github.io/wwmpvp/), every asset path in index.html
  // must be prefixed with the repo name so the browser resolves them
  // against the project subpath instead of the root. If you later point a
  // custom domain (CNAME) at this repo, change this back to '/' — GitHub
  // Pages serves the project at root when a custom domain is attached.
  base: '/wwmpvp/',
  plugins: [react()],
  assetsInclude: ['**/*.mp4'],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
})
