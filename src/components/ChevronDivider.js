import React from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const height = 100;

const styles = theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height,
    zIndex: -1
  },
  wrapper: {
    position: 'absolute',
    width: '100%'
  },
  chevron: {
    display: 'flex',
    position: 'relative',
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 2,
    height: theme.spacing.unit * 4,
    width: '100%',
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
    height,
    '&::before': {
      background: theme.palette.primary[50]
    },
    '&::after': {
      background: theme.palette.primary[50]
    }
  },
  chevronBottom: {
    transform: `translateY(${(height / 2) * -1}px)`
  }
});

const ChevronDivider = ({ classes, bottom }) => (
  <div className={classes.root}>
    <div className={classes.wrapper}>
      {!bottom && <span className={classes.chevron} />}
      <span
        className={classnames(classes.chevron, classes.chevronSecondary, {
          [classes.chevronBottom]: bottom
        })}
      />
    </div>
  </div>
);

export default withStyles(styles)(ChevronDivider);
