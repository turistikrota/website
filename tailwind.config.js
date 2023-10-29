const { withTouristicUI } = require('@turistikrota/ui/config')

module.exports = withTouristicUI({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      zIndex: {
        '-1': '-1',
      },
      blur: {
        '3xl': '30px',
      },
      backgroundImage: {
        watermark: 'var(--background-url)',
      },
    },
  },
})
