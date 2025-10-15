import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ✅ AQUÍ ES DONDE VA EL THEME
  theme: {
    extend: {
      colors: {
        'retro-pink': '#F9A8D4', // Rosa Pastel
        'retro-blue': '#93C5FD', // Azul Cielo
      },
      fontFamily: {
        display: ['var(--font-pacifico)'],
        body: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
}
export default config