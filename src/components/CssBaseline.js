import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
      // Change from `box-sizing: content-box` so that `width`
      // is not affected by `padding` or `border`.
      boxSizing: 'border-box'
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    body: {
      margin: 0, // Remove the margin in all browsers.
      backgroundColor: 'white',
      '@media print': {
        // Save printer ink.
        backgroundColor: 'white'
      }
    }
  }
};

const CSSBaseline = () => null;

export default injectSheet(styles)(CSSBaseline);
