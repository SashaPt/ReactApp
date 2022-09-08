import React, { useEffect } from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';
import ModalLogin from './ModalLogin';
import Context from '../context/context';
import { useState } from 'react';
import { IUser } from './User/IUser';
import { initialUser } from './User/initialUser';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [user, setUser] = useState<IUser>(initialUser);
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
          <AppRoutes user={user}/>
        </div>
        <ModalLogin setUser={setUser}/>
      </div>
    </Context.Provider>
  );
}

export default App;
