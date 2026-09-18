import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// Serve files from public/ fresh from disk on every request.
//
// Vite's built-in static middleware can 404 (SPA-fallback to index.html)
// for files added to public/ AFTER the dev server started — new weapon
// skill icons dropped into the project mid-session would never appear
// without a full server restart. This middleware runs before Vite's and
// reads from disk per-request, so the workflow is: drop PNG into
// public/assets/..., refresh the browser, done.
function servePublicFresh() {
  return {
    name: 'serve-public-fresh',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]
        if (!url.startsWith('/assets/') || url.includes('..')) return next()
        const filePath = path.join(__dirname, 'public', decodeURIComponent(url))
        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return next()
        res.setHeader('Content-Type', MIME[filePath.slice(filePath.lastIndexOf('.') + 1).toLowerCase()] || 'application/octet-stream')
        fs.createReadStream(filePath).pipe(res)
      })
    },
  }
}

const MIME = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  mp4: 'video/mp4',
  webm: 'video/webm',
  ico: 'image/x-icon',
}

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
  plugins: [react(), servePublicFresh()],
  assetsInclude: ['**/*.mp4'],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
    // Don't watch public/ — static assets are served as-is and never
    // trigger HMR. Watching them is actively harmful on Windows: files
    // being copied in (new icons/videos) hold an exclusive lock during
    // the copy, fs.watch gets EBUSY on the half-written file, and the
    // unhandled error event kills the whole dev server. Add a file to
    // public/ and just refresh the browser to see it.
    watch: {
      ignored: ['**/public/**'],
    },
  },
})
