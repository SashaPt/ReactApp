import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';
import http from '../http';

const Login = () => {
  const { setOpenModal, setIsLoginUser } = useContext(Context);
  const [login, setLogin] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const authorization = async () => {
    const data = { username: login, password: password };
    const authorizationData = await http.post(
      'https://dummyjson.com/auth/login',
      data
    );
    if (authorizationData.data.token) {
      localStorage.setItem('user', JSON.stringify(authorizationData.data));
      localStorage.setItem('token', authorizationData.data.token);
      setIsLoginUser(true);
      setOpenModal(false);
    }
  };
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <Link to="login">Have an account? Login!</Link>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button
          type="button"
          className="btn btn-secondary m-2"
          data-bs-dismiss="modal"
          onClick={() => setOpenModal(false)}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={() => authorization()}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
