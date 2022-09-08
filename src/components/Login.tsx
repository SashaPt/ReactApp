import React, { Dispatch, SetStateAction } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Context from '../context/context';
import http from '../http';
import { IUser } from './User/IUser';

const Login = ({setUser}: {setUser: Dispatch<SetStateAction<IUser>>}) => {
  const { setOpenModal, setIsLoginUser } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const [login, setLogin] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const authorization = async () => {
    const data = { username: login, password: password };
    const authorizationData = await http.post(
      `https://dummyjson.com/auth/${isLogin ? 'login' : 'registration'}`,
      data
    );
    if (authorizationData.data.token) {
      Object.keys(authorizationData.data).map(field => 
        localStorage.setItem(`${field}`, authorizationData.data[field])
      );
      setUser(authorizationData.data)
      setIsLoginUser(true);
      setOpenModal(false);
    }
    if (!isLogin && authorizationData.data?.email) {
      alert('Congratulate you with successfull registration!');
      setLogin('');
      setPassword('');
    }
  };
  return (
    <form>
      <div className='mb-3'>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          placeholder='login'
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </div>
      <div className='mb-3'>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          placeholder='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <Link to={isLogin ? 'registration' : 'login'}>
          {isLogin
            ? 'Do not have an account? Registration!'
            : 'Have an account? Login!'}
        </Link>
      </div>
      <div className='d-flex align-items-center justify-content-center'>
        <button
          type='button'
          className='btn btn-secondary m-2'
          data-bs-dismiss='modal'
          onClick={() => setOpenModal(false)}
        >
          Close
        </button>
        <button
          type='button'
          className='btn btn-primary m-2'
          onClick={() => authorization()}
        >
          {isLogin ? 'Login' : 'Registration'}
        </button>
      </div>
    </form>
  );
};

export default Login;
