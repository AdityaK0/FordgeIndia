/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Ultra-minimal luxury palette
                primary: '#111111', // Near black text
                'text-secondary': '#555555', // Secondary text
                'text-muted': '#888888', // Muted text
                'bg-light': '#F7F7F7', // Soft gray background
                'bg-card': '#F2F2F2', // Card gray
                'border-gray': '#E5E5E5', // Divider gray
                accent: '#0A84FF', // Minimal blue accent
                'accent-hover': '#0066CC', // Hover blue
            },
            letterSpacing: {
                'tighter': '-0.02em',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out',
                'slide-up': 'slideUp 1s ease-out',
                'float': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(40px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
            },
        },
    },
    plugins: [],
}
