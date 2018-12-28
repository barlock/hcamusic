import React from 'react';
import { compose } from 'recompose';
import classnames from 'classnames';
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
  '@global': {
    'html, body': {
      font: 'initial'
    }
  },
  root: {
    textAlign: 'initial'
  },
  gridSpacing: {
    padding: theme.spacing.unit * 3
  },
  band: {
    padding: theme.spacing.unit * 2
  },
  bandHero: {
    marginBottom: theme.spacing.unit * 6
  },
  bandPrimary: {
    backgroundColor: theme.palette.primary[50]
  },
  section: {
    marginBottom: theme.spacing.unit * 6
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
  <div id="hca-music-root" className={classes.root}>
    <Header />
    <div className={classnames(classes.band, classes.bandHero)}>
      <Grid container alignItems="center" justify="space-evenly">
        <Grid item className={classes.gridSpacing} xs={12} md={6} lg={6} xl={4}>
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
            href="#main"
            className={classes.orderButton}
            variant="outlined"
            color="secondary"
          >
            <HeartIcon className={classes.icon} />
            Order Now
          </Button>
        </Grid>
        <Grid
          item
          className={classes.gridSpacing}
          xs={10}
          sm={8}
          md={6}
          lg={5}
          xl={5}
        >
          {/*<SingingValentineBanner />*/}
          <img src="https://barlock.github.io/hcamusic/static/SingingValentineBanner.svg" />
        </Grid>
      </Grid>
    </div>
    <ChevronDivider />
    <div className={classnames(classes.band, classes.bandPrimary)}>
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
      <Grid container justify="center">
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
          description="For those looking for something really special. Contact us for details."
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
    <ChevronDivider bottom />
    {process.env.NODE_ENV === 'production' && (
      <>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-131350510-2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
document.getElementById('page-container').insertBefore(document.getElementById('hca-music-root'), document.getElementById('page-container').firstChild);
document.getElementById('order_form_heading_show_block').style = '';
<!-- Global site tag (gtag.js) - Google Analytics -->
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-131350510-2');
`
          }}
        />
      </>
    )}
  </div>
);

export default compose(
  withStyles(styles),
  withTheme()
)(Index);
