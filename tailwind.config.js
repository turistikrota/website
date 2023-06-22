function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(${variableName}, ${opacityValue})`;
    }
    return `rgb(${variableName})`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
      },
      colors: {
        primary: {
          50: withOpacity("var(--primary-color-50)"),
          100: withOpacity("var(--primary-color-100)"),
          200: withOpacity("var(--primary-color-200)"),
          300: withOpacity("var(--primary-color-300)"),
          400: withOpacity("var(--primary-color-400)"),
          500: withOpacity("var(--primary-color-500)"),
          600: withOpacity("var(--primary-color-600)"),
          700: withOpacity("var(--primary-color-700)"),
          800: withOpacity("var(--primary-color-800)"),
          900: withOpacity("var(--primary-color-900)"),
          1000: withOpacity("var(--primary-color-1000)"),
          1100: withOpacity("var(--primary-color-1100)"),
          1200: withOpacity("var(--primary-color-1200)"),
          1300: withOpacity("var(--primary-color-1300)"),
          1400: withOpacity("var(--primary-color-1400)"),
          DEFAULT: withOpacity("var(--primary-color)"),
        },
        skeleton: {
          50: withOpacity("var(--skeleton-color-50)"),
          100: withOpacity("var(--skeleton-color-100)"),
          200: withOpacity("var(--skeleton-color-200)"),
          300: withOpacity("var(--skeleton-color-300)"),
          400: withOpacity("var(--skeleton-color-400)"),
          500: withOpacity("var(--skeleton-color-500)"),
          600: withOpacity("var(--skeleton-color-600)"),
          700: withOpacity("var(--skeleton-color-700)"),
          800: withOpacity("var(--skeleton-color-800)"),
          900: withOpacity("var(--skeleton-color-900)"),
          1000: withOpacity("var(--skeleton-color-1000)"),
          1100: withOpacity("var(--skeleton-color-1100)"),
          DEFAULT: withOpacity("var(--skeleton-default-color)"),
        },
        secondary: {
          50: withOpacity("var(--secondary-color-50)"),
          100: withOpacity("var(--secondary-color-100)"),
          200: withOpacity("var(--secondary-color-200)"),
          300: withOpacity("var(--secondary-color-300)"),
          400: withOpacity("var(--secondary-color-400)"),
          500: withOpacity("var(--secondary-color-500)"),
          600: withOpacity("var(--secondary-color-600)"),
          700: withOpacity("var(--secondary-color-700)"),
          800: withOpacity("var(--secondary-color-800)"),
          900: withOpacity("var(--secondary-color-900)"),
          1000: withOpacity("var(--secondary-color-1000)"),
          1100: withOpacity("var(--secondary-color-1100)"),
          1200: withOpacity("var(--secondary-color-1200)"),
          1300: withOpacity("var(--secondary-color-1300)"),
          1400: withOpacity("var(--secondary-color-1400)"),
          DEFAULT: withOpacity("var(--secondary-color)"),
        },
      },
      borderColor: {
        DEFAULT: "var(--border-color)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        xs: "3px",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      backgroundColor: {
        popup: "var(--popup-background-color)",
        header: "var(--header-background-color)",
        second: "var(--second-background-color)",
        third: "var(--third-background-color)",
        input: "var(--default-background)",
        default: "var(--default-background)",
      },
      boxShadow: {
        top: "0 -1px 3px 0 var(--shadow-color-start), 0 -4px 8px 3px var(--shadow-color-end)",
        bottom:
          "0 1px 3px 0 var(--shadow-color-start), 0 4px 8px 3px var(--shadow-color-end)",
      },
      height: {
        popup: "calc(100vh - 22rem)",
        "popup-xs": "max(100vh - 30rem, 40vh)",
        "popup-sm": "max(100vh - 25rem, 50vh)",
        "popup-md": "max(100vh - 22rem, 60vh)",
        "popup-lg": "max(100vh - 18rem, 70vh)",
        "popup-xl": "max(100vh - 15rem, 80vh)",
        "popup-2xl": "max(100vh - 12rem, 85vh)",
        "popup-3xl": "max(100vh - 10rem, 90vh)",
      },
      animation: {
        "in-from-top": "inFromTop 0.2s ease-out",
        "in-from-bottom": "inFromBottom 0.2s ease-out",
        "in-from-left": "inFromLeft 0.2s ease-out",
        "in-from-right": "inFromRight 0.2s ease-out",
        "out-to-top": "outToTop 0.2s ease-out",
        "out-to-bottom": "outToBottom 0.2s ease-out",
        "out-to-left": "outToLeft 0.2s ease-out",
        "out-to-right": "outToRight 0.2s ease-out",
        "fade-in": "fadeIn 0.2s ease-out",
        "fade-out": "fadeOut 0.2s ease-out",
        "fade-in-from-top": "fadeIn 0.2s ease-out, inFromTop 0.2s ease-out",
        "fade-in-from-bottom":
          "fadeIn 0.2s ease-out, inFromBottom 0.2s ease-out",
        "fade-in-from-left": "fadeIn 0.2s ease-out, inFromLeft 0.2s ease-out",
        "fade-in-from-right": "fadeIn 0.2s ease-out, inFromRight 0.2s ease-out",
        "fade-out-to-top": "fadeOut 0.2s ease-out, outToTop 0.2s ease-out",
        "fade-out-to-bottom":
          "fadeOut 0.2s ease-out, outToBottom 0.2s ease-out",
        "fade-out-to-left": "fadeOut 0.2s ease-out, outToLeft 0.2s ease-out",
        "fade-out-to-right": "fadeOut 0.2s ease-out, outToRight 0.2s ease-out",
        "slide-down": "inFromTop 0.2s ease-out, fadeIn 0.2s ease-out",
        "slide-up": "outToTop 0.2s ease-out, fadeOut 0.2s ease-out",
      },
      keyframes: {
        inFromTop: {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        inFromBottom: {
          "0%": {
            transform: "translateY(100%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        inFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        inFromRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        outToTop: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        outToBottom: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(100%)",
          },
        },
        outToLeft: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        outToRight: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        fadeOut: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
