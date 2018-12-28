import React from 'react';
import { compose } from 'recompose';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button/Button';
import HeartIcon from '@material-ui/icons/Favorite';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Header from '../src/components/Header';
import PriceCard from '../src/components/PriceCard';
import ChevronDivider from '../src/components/ChevronDivider';
import SingingValentineBanner from '../src/img/SingingValentineBanner';

const styles = theme => ({
  band: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2
  },
  section: {
    marginBottom: theme.spacing.unit * 8
  },
  loveText: {
    color: theme.palette.secondary.main
  },
  icon: {
    marginRight: theme.spacing.unit
  },
  orderButton: {
    marginTop: theme.spacing.unit * 4
  }
});

const Index = ({ classes, theme: { palette } }) => (
  <>
    <Header />
    <div className={classes.band}>
      <Grid container alignItems="center" justify="space-evenly" spacing={40}>
        <Grid item xs={12} md={6} lg={6} xl={4}>
          <Typography gutterBottom variant="h2">
            Singing <span className={classes.loveText}>Valentine's</span>
          </Typography>

          <Typography paragraph variant="body1">
            Heart of Carolina A Capella is delivering songs to that special
            someone.
          </Typography>
          <Typography paragraph variant="body1">
            Two love songs, a rose, a card, and a box of chocolates, deliveries
            starting at $49
          </Typography>
          <Button
            className={classes.orderButton}
            variant="outlined"
            color="secondary"
          >
            <HeartIcon className={classes.icon} />
            Order Now
          </Button>
        </Grid>
        <Grid item xs={10} sm={8} md={6} lg={5} xl={5}>
          <SingingValentineBanner />
        </Grid>
      </Grid>
    </div>
    <ChevronDivider />
    <div className={classes.band}>
      <Grid container justify="center" className={classes.section}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h3" align={'center'}>
            Delivering to the Triangle
          </Typography>
        </Grid>

        <Grid item xs={8} md={6}>
          <Typography variant="body1" align={'center'}>
            Valentines will be delivered from February 14th-16th within a 25
            mile radius of Durham NC.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={40} justify="center">
        <PriceCard
          title="Phone/Skype"
          price={29}
          description="A phone call anywhere in the US or Skype call anywhere"
          color={palette.primary[600]}
          features={['Two love songs']}
        />
        <PriceCard
          title="4 Hour Delivery Window"
          price={49}
          description="Personal Delivery to a home or office"
          color={palette.primary[700]}
          features={[
            'Two Love Songs',
            'A Rose',
            'A Personalized Card',
            'A Small Box of Chocolates',
            '4 Hour Delivery Window'
          ]}
        />
        <PriceCard
          title="2 Hour Delivery Window"
          price={65}
          description="Personal Delivery to a home or office"
          color={palette.primary[900]}
          features={[
            'Two Love Songs',
            'A Rose',
            'A Personalized Card',
            'A Small Box of Chocolates',
            '2 Hour Delivery Window'
          ]}
        />
        <PriceCard
          title="30 Min Delivery Window"
          price={79}
          description="Personal Delivery to a home or office"
          color={palette.secondary[600]}
          features={[
            'Two Love Songs',
            'A Rose',
            'A Personalized Card',
            'A Small Box of Chocolates',
            '30 Min Delivery Window'
          ]}
        />
        <PriceCard
          title="The Proposal"
          price={249}
          description="For those looking for something really special"
          color={palette.secondary[800]}
          features={[
            'Two Love Songs',
            'A Dozen Rose',
            'A Personalized Card',
            'A Small Box of Chocolates',
            'Prompt Delivery',
            'Detailed Requests'
          ]}
        />
      </Grid>
    </div>
  </>
);

export default compose(
  withStyles(styles),
  withTheme()
)(Index);
