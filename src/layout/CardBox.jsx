import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    width: '100%',
    marginBottom: '10px',
    cursor: 'pointer',
  },
  cardImage: {
    height: '200px',
    objectFit: 'cover',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  cardInfo: {
    marginBottom: '5px',
  },
  cardPrice: {
    fontWeight: 'bold',
  },
  cardStars: {
    color: 'gold',
  },
});

const CardBox = ({ image, title, info, price, stars }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia component="img" image={image} alt={title} className={classes.cardImage} />
      <CardContent>
        <Typography variant="h5" component="div" className={classes.cardTitle}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" className={classes.cardInfo}>
          {info}
        </Typography>
        <Typography variant="body2" className={classes.cardPrice}>
          Price: {price} per hour
        </Typography>
        <Typography variant="body2" className={classes.cardStars}>
          Stars: {stars}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardBox;
