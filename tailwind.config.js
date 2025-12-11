/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Apple-inspired monochrome palette
                primary: '#000000', // Pure Black
                'primary-light': '#1D1D1F', // Charcoal (Apple's dark)
                'text-secondary': '#86868B', // Medium Gray
                'bg-light': '#F5F5F7', // Light Gray (Apple's light bg)
                'bg-card': '#FBFBFD', // Ultra light gray
                'border-gray': '#D2D2D7', // Soft border
                accent: '#1D1D1F', // Apple Blue (minimal use)
                'accent-hover': '#1D1D1F', // Slightly lighter blue
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [],
}
