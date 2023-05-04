/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                  "50": 'var(--primary-color-50)',
                    "100": 'var(--primary-color-100)',
                    "200": 'var(--primary-color-200)',
                    "300": 'var(--primary-color-300)',
                    "400": 'var(--primary-color-400)',
                    "500": 'var(--primary-color-500)',
                    "600": 'var(--primary-color-600)',
                    "700": 'var(--primary-color-700)',
                    "800": 'var(--primary-color-800)',
                    "900": 'var(--primary-color-900)',
                    "1000": 'var(--primary-color-1000)',
                    "1100": 'var(--primary-color-1100)',
                    DEFAULT: 'var(--primary-color)',

                },
                secondary: {
                    "50": 'var(--secondary-color-50)',
                    "100": 'var(--secondary-color-100)',
                    "200": 'var(--secondary-color-200)',
                    "300": 'var(--secondary-color-300)',
                    "400": 'var(--secondary-color-400)',
                    "500": 'var(--secondary-color-500)',
                    "600": 'var(--secondary-color-600)',
                    "700": 'var(--secondary-color-700)',
                    "800": 'var(--secondary-color-800)',
                    "900": 'var(--secondary-color-900)',
                    "1000": 'var(--secondary-color-1000)',
                    "1100": 'var(--secondary-color-1100)',
                    DEFAULT: 'var(--secondary-color)',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backdropBlur: {
                "xs": "3px",
            },
            backgroundColor: {
                'popup': 'var(--popup-background-color)',
                'header': 'var(--header-background-color)',
                'second': 'var(--second-background-color)',
            },
            boxShadow: {
                'top': '0 -1px 3px 0 var(--shadow-color-start), 0 -4px 8px 3px var(--shadow-color-end)',
                'bottom': '0 1px 3px 0 var(--shadow-color-start), 0 4px 8px 3px var(--shadow-color-end)',
            },
            height: {
                'popup': 'calc(100vh - 22rem)',
                'popup-xs': 'max(100vh - 30rem, 40vh)',
                'popup-sm': 'max(100vh - 25rem, 50vh)',
                'popup-md': 'max(100vh - 22rem, 60vh)',
                'popup-lg': 'max(100vh - 18rem, 70vh)',
                'popup-xl': 'max(100vh - 15rem, 80vh)',
                'popup-2xl': 'max(100vh - 12rem, 85vh)',
                'popup-3xl': 'max(100vh - 10rem, 90vh)',
            },
            animation: {
                'in-from-top': 'inFromTop 0.3s ease-out',
                'in-from-bottom': 'inFromBottom 0.3s ease-out',
                'out-to-top': 'outToTop 0.3s ease-out',
                'out-to-bottom': 'outToBottom 0.3s ease-out',
                'fade-in': 'fadeIn 0.3s ease-out',
                'fade-out': 'fadeOut 0.3s ease-out',
                'fade-in-from-top': 'fadeIn 0.3s ease-out, inFromTop 0.3s ease-out',
                'fade-in-from-bottom': 'fadeIn 0.3s ease-out, inFromBottom 0.3s ease-out',
                'fade-out-to-top': 'fadeOut 0.3s ease-out, outToTop 0.3s ease-out',
                'fade-out-to-bottom': 'fadeOut 0.3s ease-out, outToBottom 0.3s ease-out',
                'slide-down': 'inFromTop 0.3s ease-out, fadeIn 0.3s ease-out',
                'slide-up': 'outToTop 0.3s ease-out, fadeOut 0.3s ease-out',
            },
            keyframes: {
                inFromTop: {
                    '0%': {
                        transform: 'translateY(-100%)',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    }
                },
                inFromBottom: {
                    '0%': {
                        transform: 'translateY(100%)',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    }
                },
                outToTop: {
                    '0%': {
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        transform: 'translateY(-100%)',
                    }
                },
                outToBottom: {
                    '0%': {
                        transform: 'translateY(0)',
                    },
                    '100%': {
                        transform: 'translateY(100%)',
                    }
                },
                fadeIn: {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': {
                        opacity: 1,
                    }
                },
                fadeOut: {
                    '0%': {
                        opacity: 1,
                    },
                    '100%': {
                        opacity: 0,
                    }
                }
            }
        },
    },
    plugins: [],
}
