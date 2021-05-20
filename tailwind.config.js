module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6470F7',
          DEFAULT: '#2F3FF4',
          dark: '#0B1CD5',
        },
        secondary: {
          light: '#2FEEAB',
          DEFAULT: '#11D08D',
          dark: '#0C9766',
        },
        light: '#F9F9FA',
        dark: '#1F201F',
      },
      fontSize: {
        headline1: [
          '96px',
          {
            letterSpacing: '-0.09375rem',
          },
        ],
        headline2: [
          '60px',
          {
            letterSpacing: '-0.03125rem',
          },
        ],
        headline3: [
          '48px',
          {
            letterSpacing: '0rem',
          },
        ],
        headline4: [
          '34px',
          {
            letterSpacing: '0.015625rem',
          },
        ],
        headline5: [
          '24px',
          {
            letterSpacing: '0rem',
          },
        ],
        headline6: [
          '20px',
          {
            letterSpacing: '0.009375rem',
          },
        ],
        subtitle1: [
          '16px',
          {
            letterSpacing: '0.009375rem',
          },
        ],
        subtitle2: [
          '14px',
          {
            letterSpacing: '0.00625rem',
          },
        ],
        body1: [
          '16px',
          {
            letterSpacing: '0.0253125rem',
          },
        ],
        body2: [
          '14px',
          {
            letterSpacing: '0.015625rem',
          },
        ],
        button: [
          '14px',
          {
            letterSpacing: '0.078125rem',
          },
        ],
        caption: [
          '12px',
          {
            letterSpacing: '0.025rem',
          },
        ],
        overline: [
          '10px',
          {
            letterSpacing: '0.09375rem',
          },
        ],
      },
      // Increments of 4px
      spacing: {
        0: '0px',
        px: '1px',
        nudge: '2px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        8: '32px',
        12: '48px',
        16: '64px',
        18: '72px',
      },
    },
    fontFamily: {
      display: ['Work Sans', 'ui-sans-serif'],
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
    },
    shadows: {
      default: '0 2px 4px 0 rgba(0,0,0,0.10)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(52,144,220,0.5)',
      none: 'none',
    },
    screens: {
      // (none): // 1 column
      'sm': '600px', // 2 columns
      'md': '840px', // 2-4 columns
      'lg': '1024px', // 2-4 columns
      'xl': '1440px', // 4-8 columns
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
  