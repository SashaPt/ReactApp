import React, { useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';
import ModalLogin from './ModalLogin';
import Context from '../context/context';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoginUser, setIsLoginUser] = useState(false);
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoginUser(true);
    }
  }, []);
  return (
    <Context.Provider
      value={{ openModal, setOpenModal, isLoginUser, setIsLoginUser }}
    >
      <div className='App'>
        <NavBar />
        <div className='container'>
          <AppRoutes />
        </div>
        <ModalLogin/>
      </div>
    </Context.Provider>
  );
}

export default App;
