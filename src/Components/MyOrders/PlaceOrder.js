import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Button,
  Typography,
} from '@mui/material';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mighty-headland-58839.herokuapp.com/product/${params.id}`)
      .then((res) => setProduct(res.data));
  }, []);
  console.log(product);
  const [placeOrder, setPlaceOrder] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const newData = {
      ...data,
      status: 'Pending',
      user: user.email,
      product: product,
    };
    axios
      .post(`https://mighty-headland-58839.herokuapp.com/placeOrder`, newData)
      .then((res) => {
        setSuccessful(true);
        console.log(res.data);
      });
  };

  return (
    <>
      {placeOrder ? (
        <div className='order-form bg-success p-3'>
          {successful ? (
            <>
              {/* <h4 className='text-white'></h4> */}
              <Typography variant='h3' color='white'>
                Your order will be placed when you will pay Successfully!
              </Typography>
              <Typography variant='h3' color='white'>
                Thank You...
              </Typography>

              <Grid
                container
                style={{ justifyContent: 'center', margin: '20px 0px' }}
              >
                <Grid item md={2}>
                  <Card sx={{ width: '100%' }}>
                    <CardHeader
                      title={product.title}
                      subheader={product.date}
                    />
                    <CardMedia
                      component='img'
                      height='194'
                      image={product.image}
                      alt=''
                    />

                    <div className='p-3'>
                      <div className='place-order'>
                        <Typography variant='body' color='warning.main'>
                          Total: $<span>{product.price}</span>
                        </Typography>

                        <Typography variant='body' color='warning.main'>
                          Status: Waiting for Payment
                        </Typography>

                        <Link to='/pay'>
                          <Button sx={{ mx: 4 }} variant='outlined'>
                            Go for payment
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </Grid>
              </Grid>
              <div className='d-flex justify-content-center'>
                <Link to='/'>
                  <Button sx={{ mb: 2 }} variant='contained' color='success'>
                    Go to home
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
              <h5 className='my-5 text-white fw-bolder '>
                Enter shipping address
              </h5>
              <input type='text' placeholder='Name' {...register('name')} />
              <input type='email' placeholder='Email' {...register('email')} />
              <input
                type='phone'
                placeholder='Contact No.'
                {...register('phone')}
              />
              <input
                type='text'
                placeholder='Address'
                {...register('address')}
              />

              <input type='submit' />
            </form>
          )}
        </div>
      ) : (
        <Grid
          container
          style={{ justifyContent: 'center', margin: '20px 0px' }}
        >
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
              <div className='p-3'>
                <div className='d-flex justify-content-between'>
                  <Typography variant='h6' color='warning.main'>
                    Total: $<span>{product.price}</span>
                  </Typography>
                  <Button
                    onClick={() => setPlaceOrder(true)}
                    sx={{ mb: 2 }}
                    variant='contained'
                    color='success'
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default PlaceOrder;
