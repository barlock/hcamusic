import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HeartIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3
  },
  card: {
    height: '100%',
    maxWidth: 400,
    margin: '0 auto'
  },
  content: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1
  },
  description: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing.unit
  },
  feature: {
    display: 'flex',
    flex: 1,
    alignItems: 'center'
  },
  featureIcon: {
    marginRight: theme.spacing.unit
  }
});

const setColor = color => ({
  style: {
    color
  }
});

const PriceCard = ({
  classes,
  price,
  title,
  description,
  features = [],
  color = 'black'
}) => (
  <Grid item xs={10} sm={8} md={6} lg={4} xl={2} className={classes.root}>
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="subtitle1" {...setColor(color)}>
          {title}
        </Typography>
        <Typography gutterBottom variant="h4">
          ${price}
        </Typography>
        <Typography
          gutterBottom
          className={classes.description}
          variant="body1"
        >
          {description}
        </Typography>
        {features.map(feature => (
          <span className={classes.feature} key={feature}>
            <HeartIcon className={classes.featureIcon} {...setColor(color)} />
            <Typography variant="body1">{feature}</Typography>
          </span>
        ))}
      </CardContent>
    </Card>
  </Grid>
);

export default withStyles(styles)(PriceCard);
