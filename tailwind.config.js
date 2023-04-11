/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backgroundColor: {
                'popup': 'var(--popup-background-color)',
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
                'in-from-top': 'inFromTop 0.5s ease-out',
                'in-from-bottom': 'inFromBottom 0.5s ease-out',
                'out-to-top': 'outToTop 0.5s ease-out',
                'out-to-bottom': 'outToBottom 0.5s ease-out',
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-out': 'fadeOut 0.5s ease-out',
                'fade-in-from-top': 'fadeIn 0.5s ease-out, inFromTop 0.5s ease-out',
                'fade-in-from-bottom': 'fadeIn 0.5s ease-out, inFromBottom 0.5s ease-out',
                'fade-out-to-top': 'fadeOut 0.5s ease-out, outToTop 0.5s ease-out',
                'fade-out-to-bottom': 'fadeOut 0.5s ease-out, outToBottom 0.5s ease-out',
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
