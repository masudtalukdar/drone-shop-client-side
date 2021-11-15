import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';
import Footer from './Components/Shared/Footer/Footer';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import ExploreProducts from './Components/ExploreProducts/ExploreProducts';
import MyOrders from './Components/MyOrders/MyOrders';
import ContactUs from './Components/ContactUs/ContactUs';
import PlaceOrder from './Components/MyOrders/PlaceOrder';
import AuthProvider from './Components/Context/AuthProvider';
import Payment from './Components/MyOrders/Payment/Payment';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Navigation></Navigation>
              <Home />
              <Footer></Footer>
            </Route>
            <Route path='/home'>
              <Navigation></Navigation>
              <Home />
              <Footer></Footer>
            </Route>
            <Route path='/explore-products'>
              <Navigation></Navigation>
              <ExploreProducts />
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/placeOrders/:id'>
              <Navigation></Navigation>
              <PlaceOrder />
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/myOrders'>
              <Navigation></Navigation>
              <MyOrders />
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path='/pay'>
              <Navigation></Navigation>
              <Payment />
              <Footer></Footer>
            </PrivateRoute>
            <Route path='/contact'>
              <Navigation></Navigation>
              <ContactUs />
              <Footer></Footer>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>
            <Route path='/login'>
              <Navigation></Navigation>
              <Login />
              <Footer></Footer>
            </Route>
            <Route path='*'>
              <Navigation></Navigation>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
