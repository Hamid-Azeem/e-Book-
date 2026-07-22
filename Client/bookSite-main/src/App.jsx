import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NavBar from './components/NavBar';
import MyFooter from './components/MyFooter';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <>
      <ScrollTop />
      <NavBar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <MyFooter />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;