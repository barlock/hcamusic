import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

const Anchor = ({ children, classes, external, ...props }) => {
  return (
    <a className={classes.root} target={external ? '_blank' : ''} {...props}>
      {children}
    </a>
  );
};

export default withStyles(styles)(Anchor);
