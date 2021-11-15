import { Card, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = ({ status }) => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    axios
      .get(
        `https://mighty-headland-58839.herokuapp.com/userOrders/${user.email}`
      )
      .then((res) => setOrders(res.data));
  }, [user]);
  console.log(orders);
  return (
    <Grid
      container
      spacing={3}
      style={{ justifyContent: 'center', margin: '20px 0px' }}
    >
      {orders?.map((order) => (
        <Grid item md={2}>
          <Card sx={{ width: '100%', m: 0 }}>
            <CardHeader
              title={order.product.title}
              subheader={order.product.date}
            />
            <CardMedia
              component='img'
              height='194'
              image={order.product.image}
              alt=''
            />

            <div className='p-3'>
              <div className='d-flex justify-content-between'>
                <Typography variant='body' color='warning.main'>
                  Total: $<span>{order.product.price}</span>
                </Typography>
                <Typography variant='body' color='warning.main'>
                  Status: <span>{order.status}</span>
                </Typography>
                <Typography variant='body' color='warning.main'>
                  Address: <span>{order.address}</span>
                </Typography>
              </div>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyOrders;
