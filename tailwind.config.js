/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6B8E88',
                    light: '#8BA9A3',
                    dark: '#4A6B66',
                },
                secondary: {
                    DEFAULT: '#D4AE7E',
                },
                accent: {
                    DEFAULT: '#9B7E6F',
                },
                cream: '#FAF8F5',
                beige: '#EDE8E2',
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-in-out',
                'fade-in-up': 'fadeInUp 0.8s ease-in-out',
                'ripple': 'ripple 0.6s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                ripple: {
                    '0%': { transform: 'scale(0)', opacity: '1' },
                    '100%': { transform: 'scale(4)', opacity: '0' },
                },
            },
        },
    },
    plugins: [],
}
