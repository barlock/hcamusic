import { createMuiTheme } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import ModularScale from 'modular-scale';

export const ms = ModularScale({
  ratio: ModularScale.ratios.majorThird,
  base: 1
});

export const theme = {
  palette: {
    primary: {
      light: '#c25ea1',
      main: '#8f2e72',
      dark: '#5e0046'
    },
    secondary: {
      light: '#ffd84e',
      main: '#f5a70e',
      dark: '#bd7800'
    },
    background: grey[50]
  },
  typography: {
    htmlFontSize: 15,
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: `${ms(7)}em`,
      fontWeight: 500
    },
    h2: {
      fontSize: `${ms(6)}em`
    },
    h3: {
      fontSize: `${ms(5)}em`
    },
    h4: {
      fontSize: `${ms(4)}em`
    },
    h5: {
      fontSize: `${ms(3)}em`
    },
    h6: {
      fontSize: `${ms(2)}em`
    },
    subtitle1: {
      fontSize: `${ms(1)}em`,
      fontWeight: 600
    },
    subtitle2: {
      fontSize: `${ms(-1)}em`
    },
    body1: {
      fontSize: `${ms(1)}em`
    },
    body2: {
      fontSize: `${ms(-1)}em`
    },
    button: {
      fontSize: `${ms(1)}em`,
      textTransform: 'none'
    },
    caption: {
      fontSize: `${ms(-1)}em`
    },
    overline: {
      fontSize: `${ms(-1)}em`
    }
  },
  shape: {
    borderRadius: 25
  }
};

export default createMuiTheme(theme);
