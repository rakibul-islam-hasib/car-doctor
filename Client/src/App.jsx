import React from 'react';
import NavBar from './components/headers/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/pages/shared/Footer';

const App = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <NavBar />
      <Outlet /> 
      <Footer /> 
    </div>
  );
};

export default App;