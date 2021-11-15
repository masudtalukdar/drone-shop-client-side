import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import img from '../../../Images/content-img.jpg';
import feaImg from '../../../Images/feature/1.jpg';

const MainContent = () => {
  return (
    <Container>
      <Box container sx={{ width: '100%', pt: '50px' }}>
        <Grid container spacing={2}>
          <Grid xs={6} sx={{ pt: -80 }}>
            <Typography variant='h3' component='div' gutterBottom>
              A CONTROLLER SMARTER THAN MOST DRONE
            </Typography>
            <Typography variant='h6' component='div' gutterBottom>
              Everybody pulled his weight. Gee our old Lassalle ran great. Those
              were the days. You wanna be where you can see our troubles are all
              the same. You wanna be where everybody knows Your name. I have
              always wanted to have a neighbor just like you. I’ve always wanted
              to live in a neighborhood with you.
            </Typography>
            <Typography variant='h6' component='div' gutterBottom>
              Hills that is. Swimming pools movie stars. Making your way in the
              world today takes everything you’ve got. Takin’ a break from all
              your worries sure would help a lot.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs>
                <img style={{ width: '80px' }} src={feaImg} alt='' />
                <Typography variant='h4' gutterBottom component='div'>
                  PREFLIGHT
                </Typography>
                <Typography variant='subtitle2' gutterBottom component='div'>
                  Travelled down the road and back again. Your heart is true
                  you're a confidant.
                </Typography>
              </Grid>
              <Grid item xs>
                <img style={{ width: '80px' }} src={feaImg} alt='' />
                <Typography variant='h4' gutterBottom component='div'>
                  PREFLIGHT
                </Typography>
                <Typography variant='subtitle2' gutterBottom component='div'>
                  Travelled down the road and back again. Your heart is true
                  you're a confidant.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6}>
            <img src={img} alt='' />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainContent;
