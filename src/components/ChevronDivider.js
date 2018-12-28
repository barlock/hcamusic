import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    zIndex: -1
  },
  wrapper: {},
  chevron: {
    display: 'flex',
    position: 'relative',
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 2,
    height: theme.spacing.unit * 4,
    width: '100%',
    transform: 'translateY(-100px)',
    '&::before': {
      content: 'no-open-quote',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '50%',
      background: theme.palette.secondary[50],
      transform: 'skew(0deg, 6deg)'
    },
    '&::after': {
      content: 'no-open-quote',
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '50%',
      background: theme.palette.secondary[50],
      transform: 'skew(0deg, -6deg)'
    }
  },
  chevronSecondary: {
    height: '100px',
    '&::before': {
      background: theme.palette.primary[50]
    },
    '&::after': {
      background: theme.palette.primary[50]
    }
  }
});

const ChevronDivider = ({ classes }) => (
  <div className={classes.root}>
    <span className={classes.chevron} />
    <span className={classnames(classes.chevron, classes.chevronSecondary)} />
  </div>
);

export default withStyles(styles)(ChevronDivider);
