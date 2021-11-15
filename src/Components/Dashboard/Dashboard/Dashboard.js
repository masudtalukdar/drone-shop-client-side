import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import Button from '@mui/material/Button';
import ManageProduct from '../ManageProduct/ManageProduct';
import ManageOrder from '../ManageOrder/ManageOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <Link to='/dashboard/addProducts'>
          <ListItem button>
            <ListItemIcon>
              <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary='Add product' />
          </ListItem>
        </Link>
        <Link to='/dashboard/manageProducts'>
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary=' Manage Products' />
          </ListItem>
        </Link>
        <Link to='/dashboard/manageOrders'>
          <ListItem button>
            <ListItemIcon>
              <ModeEditIcon />
            </ListItemIcon>
            <ListItemText primary=' Manage Orders' />
          </ListItem>
        </Link>
        <Link to='/dashboard/makeAdmin'>
          <ListItem button>
            <ListItemIcon>
              <ModeEditIcon />
            </ListItemIcon>
            <ListItemText primary=' Make Admin' />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path='/dashboard'>
            <h2
              className='text-danger fw-bolder'
              style={{ margin: '300px 0px' }}
            >
              Welcome To Admin Dashboard
            </h2>
          </Route>
          <Route exact path='/dashboard/addProducts'>
            <AddProduct></AddProduct>
          </Route>
          <Route path='/dashboard/manageProducts'>
            <ManageProduct></ManageProduct>
          </Route>
          <Route path='/dashboard/manageOrders'>
            <ManageOrder></ManageOrder>
          </Route>
          <Route path='/dashboard/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
