import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import Product from '../pages/Product';
import { useContext } from 'react';
import Context from '../context/context';
import User from '../pages/User';
import { IUser } from './User/IUser';

const AppRoutes = ({user}: {user: IUser}) => {
  const { isLoginUser } = useContext(Context);
  return (
    <>
      {isLoginUser ? (
        <Routes>
          <Route path='*' element={<Products />} />
          <Route path='user' element={<User user={user} />} />
          <Route path='products/:id' element={<Product />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='*' element={<Products />} />{' '}
          <Route path='products/:id' element={<Product />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
