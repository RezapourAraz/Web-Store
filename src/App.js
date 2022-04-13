import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { useDispatch } from 'react-redux';

import { loggedInUser } from './redux/actions/currentUserAction';
import { getProducts } from './redux/actions/getProductAction';
import { getBanners } from './redux/actions/getBannerAction';
import { getCategoryBanners } from './redux/actions/categoryBannerAction';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import ProductDetail from './pages/ProductDetail';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loggedInUser())
    dispatch(getProducts())
    dispatch(getBanners())
    dispatch(getCategoryBanners())
  },[dispatch])

  return (
    
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard/*' element={<UserDashboard />} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />
        </Routes>
    
  );
}

export default App;
