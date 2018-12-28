import React from 'react';
import { compose } from 'recompose';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import HeartIcon from '@material-ui/icons/Favorite';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Logo from '../img/Logo';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing.unit
  }
});

const Header = ({ classes, theme }) => (
  <div className={classes.root}>
    <Grid container alignItems="center" justify="space-between">
      <Grid item>
        <a href="https://hcamusic.org">
          <Logo
            size={64}
            primary={theme.palette.primary[400]}
            accent={theme.palette.primary[200]}
          />
        </a>
      </Grid>
      <Grid item>
        <Button href="#main" variant="outlined" color="secondary">
          <HeartIcon className={classes.icon} />
          Order Now
        </Button>
      </Grid>
    </Grid>
  </div>
);

export default compose(
  withTheme(),
  withStyles(styles)
)(Header);
