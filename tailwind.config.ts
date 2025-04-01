import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        alfaSlab: ['Alfa Slab One', 'serif'],
      },
      fontSize: {
        'vw-sm': '2vw',
        'vw-md': '4vw',
        'vw-lg': '6vw',
      },
      maxWidth: {
        'vw-md': '50vw',
      },
      minWidth: {
        'vw-sm': '20vw',
        'vw-md': '60vw',
      },
      width: {
        'vw-pic': '20vw',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
export default config
