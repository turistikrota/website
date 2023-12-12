const { withTouristicUI } = require('@turistikrota/ui/config')

module.exports = withTouristicUI({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      height: {
        144: '36rem',
        156: '39rem',
        168: '42rem',
        180: '45rem',
        192: '48rem',
        filter: 'calc(100vh - 35rem)',
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
