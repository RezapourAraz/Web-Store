import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
