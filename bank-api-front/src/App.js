import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './designs/css/main.css'

// Components
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';
import Erreur404 from './pages/Erreur404';
import Root from './layouts/Root';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>

        {/* PUBLIC ROUTES */}
        <Route index element={<Home />} />
        <Route path='/signin' element={<SignIn />} />

        {/* PRIVATE ROUTES */}
        { isAuthenticated && <Route token  path='/profile' element={<Profile />} />} 
        { isAuthenticated && <Route path='/profile/transactions' element={<Transactions />} />}
          
        {/* HANDLING WRONG ROUTES */}
        <Route path="*" element={<Erreur404 />} />
      </Route>
    )
  ) 
  return (
    <RouterProvider router={router} />
  );
}

export default App