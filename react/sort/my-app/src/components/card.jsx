import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardItem = ( {item} ) => {
  return (
    <div className="card">
      <Card className='card-color'>
        <CardMedia
          component="img"
          alt={item.title}
          height="350"
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6" color="div">
            Цена: {item.price}
          </Typography>
          <Typography variant="h6" color="div">
            Рейтинг: {item.rating.rate}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>

  )
}

export default CardItem