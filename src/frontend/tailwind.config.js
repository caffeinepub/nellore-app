import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                heading: ['"Playfair Display"', 'Georgia', 'serif'],
                body: ['Lato', 'system-ui', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                terracotta: {
                    50:  'oklch(0.96 0.03 38)',
                    100: 'oklch(0.91 0.06 38)',
                    200: 'oklch(0.83 0.09 38)',
                    300: 'oklch(0.74 0.12 38)',
                    400: 'oklch(0.66 0.15 38)',
                    500: 'oklch(0.58 0.16 38)',
                    600: 'oklch(0.50 0.15 38)',
                    700: 'oklch(0.42 0.13 38)',
                    800: 'oklch(0.34 0.10 38)',
                    900: 'oklch(0.26 0.07 38)',
                },
                gold: {
                    50:  'oklch(0.97 0.03 80)',
                    100: 'oklch(0.94 0.06 80)',
                    200: 'oklch(0.90 0.09 80)',
                    300: 'oklch(0.87 0.12 80)',
                    400: 'oklch(0.84 0.13 80)',
                    500: 'oklch(0.82 0.14 80)',
                    600: 'oklch(0.74 0.13 75)',
                    700: 'oklch(0.64 0.11 70)',
                    800: 'oklch(0.50 0.09 65)',
                    900: 'oklch(0.36 0.07 60)',
                },
                teal: {
                    50:  'oklch(0.96 0.03 195)',
                    100: 'oklch(0.90 0.06 195)',
                    200: 'oklch(0.80 0.08 195)',
                    300: 'oklch(0.70 0.09 195)',
                    400: 'oklch(0.60 0.10 195)',
                    500: 'oklch(0.48 0.09 195)',
                    600: 'oklch(0.40 0.08 195)',
                    700: 'oklch(0.33 0.07 195)',
                    800: 'oklch(0.26 0.05 195)',
                    900: 'oklch(0.20 0.04 195)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
                warm: '0 4px 20px oklch(0.58 0.16 38 / 0.12)',
                'warm-lg': '0 8px 40px oklch(0.58 0.16 38 / 0.18)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.6s ease-out forwards',
            }
        }
    },
    plugins: [typography, containerQueries, animate]
};
