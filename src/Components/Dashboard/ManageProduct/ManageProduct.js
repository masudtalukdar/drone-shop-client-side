import {
  // Card,
  // CardActions,
  // CardContent,
  // CardHeader,
  // CardMedia,
  Grid,
  // IconButton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import Button from '@mui/material/Button';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import EditProducts from './EditProducts';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState([]);

  useEffect(() => {
    axios
      .get('https://mighty-headland-58839.herokuapp.com/allProducts')
      .then((res) => setProducts(res.data));
  }, [reload]);
  console.log(products);
  return (
    <Box>
      <Typography sx={{ mb: 5 }} variant='h4' color='text.secondary'>
        Manage Product
      </Typography>
      <Grid container spacing={5}>
        {products.map((product) => (
          <EditProducts
            key={product._id}
            setReload={setReload}
            product={product}
          ></EditProducts>
        ))}
      </Grid>
    </Box>
  );
};

export default ManageProduct;

{
  /* <Grid item md={4}>
  <Card sx={{ width: '100%' }}>
    <CardHeader title={product.title} subheader={product.date} />
    <CardMedia component='img' height='194' image={product.image} alt='' />
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

    <Button sx={{ mb: 2 }} variant='contained' color='success'>
      Edit
    </Button>
  </Card>
</Grid>; */
}
