import { createMuiTheme } from '@material-ui/core';
import { theme as defaultTheme } from './index';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import ModularScale from 'modular-scale';

export const ms = ModularScale({
  ratio: ModularScale.ratios.majorThird,
  base: 1
});

export const theme = {
  ...defaultTheme,
  palette: {
    primary: pink,
    secondary: red,
    background: {
      default: '#fefdfe'
    }
  }
};

export default createMuiTheme(theme);
