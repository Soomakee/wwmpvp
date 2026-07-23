/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    borderRadius: {
      none: '0',
      DEFAULT: '0',
      sm: '0',
      md: '0',
      lg: '0',
      xl: '0',
      '2xl': '0',
      '3xl': '0',
      full: '9999px',
    },
    extend: {
      colors: {
        midnight: {
          950: '#050505',
          900: '#0a0a0c',
          850: '#0d0e11',
          800: '#131418',
          700: '#1c1e24',
        },
        accent: {
          blue: '#3b82f6',
          red: '#f87171',
        },
        // Tier palette — green=low, blue=mid, yellow=high, red=extreme.
        // Each tier carries both a solid color and a translucent fill
        // for use as text or as badge/rail backgrounds.
        tier: {
          x: '#858585', // muted, no color
          0: '#a3a3a3', // grey (Neutral-400)
          1: '#34d399', // green (Emerald-400)
          2: '#60a5fa', // blue (Blue-400)
          3: '#fbbf24', // yellow (Amber-400)
          4: '#f87171', // red (Red-400)
        },
        // Set/category accent colors — used for rail strips on cards
        // and as the color for category section headers.
        set: {
          bellstrike: '#60a5fa', // blue
          silkbind: '#34d399',   // green
          bamboocut: '#e879f9',  // purple/fuchsia
          stonesplit: '#ef4444', // dark red
          mystic: '#facc15',     // gold-400 for mystic skills
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glass: 'inset 0 1px 0 0 rgba(255,255,255,0.04)',
        'neon-red': '0 0 12px rgba(248,113,113,0.45), 0 0 2px rgba(248,113,113,0.9) inset',
        'neon-blue': '0 0 14px rgba(59,130,246,0.35), 0 0 1px rgba(59,130,246,0.9) inset',
      },
      backdropBlur: {
        xl: '20px',
      },
    },
  },
  plugins: [],
}
