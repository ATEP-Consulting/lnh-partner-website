/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand palette pulled from LNH & Partner logo
        navy: {
          50: '#f1f4f9',
          100: '#dde4ee',
          200: '#bccae0',
          300: '#92a8cb',
          400: '#6884b3',
          500: '#48689b',
          600: '#385281',
          700: '#2d4269',
          800: '#1f2e4d',
          900: '#0f1a36',
          950: '#070d20',
        },
        gold: {
          50: '#fdf9ef',
          100: '#faf0d5',
          200: '#f4dea7',
          300: '#ecc56e',
          400: '#e3a93f',
          500: '#d18d24',
          600: '#b16e1d',
          700: '#8e521c',
          800: '#75421e',
          900: '#62371d',
        },
        steel: {
          50: '#f6f7f9',
          100: '#eceff3',
          200: '#d5dbe4',
          300: '#b1bccc',
          400: '#8696af',
          500: '#677994',
          600: '#52617a',
          700: '#444f63',
          800: '#3a4253',
          900: '#333947',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'navy-gradient':
          'linear-gradient(135deg, #0f1a36 0%, #1f2e4d 50%, #2d4269 100%)',
        'gold-gradient':
          'linear-gradient(90deg, #d18d24 0%, #ecc56e 50%, #d18d24 100%)',
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(209, 141, 36, 0.15) 0%, transparent 60%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'shimmer': 'shimmer 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      boxShadow: {
        'glow-gold': '0 0 30px rgba(209, 141, 36, 0.25)',
        'card': '0 10px 40px -10px rgba(15, 26, 54, 0.25)',
        'card-hover': '0 25px 60px -15px rgba(15, 26, 54, 0.4)',
      },
    },
  },
  plugins: [],
};
