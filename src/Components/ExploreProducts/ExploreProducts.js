import React from 'react';
import { useEffect, useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box } from '@mui/system';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ExploreProducts = ({ home }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://mighty-headland-58839.herokuapp.com/allProducts')
      .then((res) => setProducts(res.data));
  }, []);
  console.log(home);
  const displayProducts = home ? products.slice(0, 6) : products;
  return (
    <container>
      <Typography sx={{ p: 5 }} variant='h4' color='text.secondary'>
        DRONE PRODUCTS
      </Typography>
      <Divider />
      <Box className='products' sx={{ display: 'flex', m: 10 }}>
        <Grid container spacing={2}>
          {displayProducts?.map((product) => (
            <Grid item md={3}>
              <Card sx={{ width: '100%' }}>
                <CardHeader title={product.title} subheader={product.date} />
                <CardMedia
                  component='img'
                  height='194'
                  image={product.image}
                  alt=''
                />
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label='add to favorites'>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label='share'>
                    <ShareIcon />
                  </IconButton>
                  <Box sx={{ mx: 20 }}>
                    <Typography variant='h4' color='warning.main'>
                      $<span>{product.price}</span>
                    </Typography>
                  </Box>
                </CardActions>

                <Link to={`/placeOrders/${product._id}`}>
                  <Button variant='contained' color='success'>
                    Buy Now
                  </Button>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </container>
  );
};

export default ExploreProducts;
