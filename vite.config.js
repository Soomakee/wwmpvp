import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // Relative base paths.
  //
  // Every URL the app constructs at runtime (`/assets/Icons/...`,
  // `/assets/Weapon Previews/...`) gets resolved relative to the current
  // page URL when this is `'./'`. That means the SAME bundle works at
  // https://Soomakee.github.io/wwmpvp/ today, and would also work at any
  // future custom domain (CNAME), without touching component code.
  //
  // Trade-off: with a relative base, hashed static `<a>`/`<link>` hrefs
  // must also use relative URLs (no leading '/'). Use `import.meta.env.BASE_URL`
  // at runtime if you ever need to mix absolute+relative.
  base: './',
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
