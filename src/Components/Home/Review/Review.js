import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
} from '@mui/material';

import img1 from '../../../Images/Review/1.jpg';
import img2 from '../../../Images/Review/2.jpg';
import img3 from '../../../Images/Review/3.jpg';
import Box from '@mui/material/Box';
import { Container } from 'react-bootstrap';

const Review = () => {
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  ></Box>;
  return (
    <Container>
      <Box sx={{ display: 'flex', m: 10 }}>
        <Grid item xs={6} md={8}>
          <Card sx={{ maxWidth: 345 }}>
            <Avatar
              sx={{ mx: '128px', mt: 2 }}
              style={{ width: '100px', height: '100px' }}
              src={img1}
              alt=''
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lizard
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                I recommend droneshop.I was searching for the mounting frame of
                my runcam3 and it was the only website that had it, and they
                send me the item in 2 days (from Netherlands to Belgium) That's
                why I decided to review this company, because they are
                professionals and they care about the client!
              </Typography>
              <Rating name='read-only' value={5} readOnly />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={8}>
          <Card sx={{ maxWidth: 345 }}>
            <Avatar
              sx={{ mx: '128px', mt: 2 }}
              style={{ width: '100px', height: '100px' }}
              src={img2}
              alt=''
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Jonas
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                I just got mine last week. Right out of the box, two things
                occurred to me. This is a smaller mavic pro with some nice
                enhancements. The bag that it comes with is well designed and
                the whole package fits nicely in a smaller space. Everything
                fits and there’s room for all the accessories.
              </Typography>
              <Rating name='read-only' value={3.5} readOnly />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={8}>
          <Card sx={{ maxWidth: 345 }}>
            <Avatar
              sx={{ mx: '128px', mt: 2 }}
              style={{ width: '100px', height: '100px' }}
              src={img3}
              alt=''
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                Lisa
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                As a previous drone owner, I felt more confident in my drone
                flying abilities and felt it was time to step-up and take my
                droning hobby to the next level. I decided to purchase the Holy
                Stone HS720E. There is such a remarkable difference from my
                previous drones. The notable key features include GPS,
                auto-stabilization..
              </Typography>
              <Rating name='read-only' value={5} readOnly />
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </Container>
  );
};

export default Review;
