import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Pages/HomeScreen'
import ProductScreen from './Pages/ProductScreen'
import CartScreen from './Pages/CartScreen'
import LoginScreen from './Pages/LoginScreen'
import RegisterScreen from './Pages/RegisterScreen'
import ProfileScreen from './Pages/ProfileScreen'
import ShippingScreen from './Pages/ShippingScreen'
import PaymentScreen from './Pages/PaymentScreen'
import PlaceOrderScreen from './Pages/PlaceOrderScreen'
import OrderScreen from './Pages/OrderScreen'

import ProductListScreen from './Admin/ProductListScreen';
import UserEditScreen from './Admin/UserEditScreen';
import UserListScreen from './Admin/UserListScreen';
import ProductEditScreen from './Admin/ProductEditScreen';
import OrderListScreen from './Admin/OrderListScreen';
import CuisineScreen from './Pages/CuisineScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />

        </Container>
        <Route path='/search/:keyword' component={HomeScreen} exact />
        <Route path='/page/:pageNumber' component={HomeScreen} exact />
        <Route
          path='/search/:keyword/page/:pageNumber'
          component={HomeScreen}
          exact
        />
        <Route path='/' component={HomeScreen} exact />
        <Route path="/cuisine/:cuisine" component={CuisineScreen} exact />
      </main>
      <Footer />
    </Router>
  )
}

export default App
