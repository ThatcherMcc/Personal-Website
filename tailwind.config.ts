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
      colors: {
        olive: '#dde5b6',
        grass: '#adc178',
        cream: '#f0ead2',
        bark: '#a98467',
        chocolate: '#6c584c',

        ocean: '#2f6690',
        whale: '#3a7ca5',
        cloud: '#ebf5ee',
        midnight: '#283044',
        bluey: '#78a1bb',
      },
      fontFamily: {
        DM: ['DM Sans', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
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
