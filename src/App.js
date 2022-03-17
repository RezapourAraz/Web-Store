import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { useDispatch } from 'react-redux';

import { loggedInUser } from './redux/actions/currentUserAction';
import { getProducts } from './redux/actions/getProductAction';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loggedInUser())
    dispatch(getProducts())
  },[dispatch])

  return (
    
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard/*' element={<UserDashboard />} />
        </Routes>
    
  );
}

export default App;
