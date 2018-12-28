import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'relative',
    top: theme.spacing.unit * -2,
    zIndex: -1,
    marginBottom: theme.spacing.unit * 10
  },
  chevron: {
    display: 'flex',
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    height: theme.spacing.unit * 10,
    width: '100%',
    transform: 'translateY(-16px)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '50%',
      background: theme.palette.primary[50],
      transform: 'skew(0deg, 8deg)'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '50%',
      background: theme.palette.primary[50],
      transform: 'skew(0deg, -8deg)'
    }
  },
  chevronSecondary: {
    '&::before': {
      background: theme.palette.secondary[50]
    },
    '&::after': {
      background: theme.palette.secondary[50]
    }
  }
});

const ChevronDivider = ({ classes }) => (
  <div className={classes.root}>
    <span className={classnames(classes.chevron, classes.chevronSecondary)} />
    <span className={classes.chevron} />
  </div>
);

export default withStyles(styles)(ChevronDivider);
