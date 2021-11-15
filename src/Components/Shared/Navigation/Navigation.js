import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import img from '../../../Images/drone-logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

export default function ButtonAppBar() {
  const { user, LogOut } = useAuth();
  console.log(user);
  const [admin, setAdmin] = React.useState(false);
  React.useEffect(() => {
    axios
      .get(
        `https://mighty-headland-58839.herokuapp.com/checkAdmin/${user.email}`
      )
      .then((res) => setAdmin(res.data));
  }, [user]);
  console.log(admin);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component='div' sx={{ flexGrow: 1 }}>
            <img style={{ width: '10%', padding: 10 }} src={img} alt='' />
          </Typography>
          <Link to='/explore-products'>
            <Button
              sx={{ textDecoration: 'none' }}
              className='text-white'
              color='inherit'
            >
              Explore Products
            </Button>
          </Link>
          {admin ? (
            <Link to='/dashboard'>
              <Button
                sx={{ textDecoration: 'none' }}
                className='text-white'
                color='inherit'
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <>
              {user.email && (
                <Link to='/myOrders'>
                  <Button
                    sx={{ textDecoration: 'none' }}
                    className='text-white'
                    color='inherit'
                  >
                    My Orders
                  </Button>
                </Link>
              )}
            </>
          )}

          <Link to='/contact'>
            <Button
              sx={{ textDecoration: 'none' }}
              className='text-white'
              color='inherit'
            >
              Contact Us
            </Button>
          </Link>
          {user.email ? (
            <button onClick={LogOut} className='btn btn-danger mx-2'>
              Logout
            </button>
          ) : (
            <button className='btn btn-danger mx-2'>
              <Link
                style={{ textDecoration: 'none' }}
                className='text-white'
                to='/login'
              >
                Login
              </Link>
            </button>
          )}
          {user.email && (
            <p style={{ color: 'white' }}>Welcome, {user.displayName}</p>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
