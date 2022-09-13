import React from 'react';
import { IUser } from '../components/User/IUser';

const User = () => {
  const user : IUser = JSON.parse( localStorage.user );

  return (
    <div className="col">
      <div className="card">
        <div style={{ height: '30vh' }}>
          <img
            src={user.image}
            className="card-img-top"
            alt="avatar"
            style={{ height: '100%', width: 'auto' }}
          />
        </div>
        <div className="card-body">
          <h4 className="card-title">Username: {user.username}</h4>
          <h5 className="card-title">First Name: {user.firstName}</h5>
          <h5 className="card-title">Last Name: {user.lastName}</h5>
          <p className="card-text">Gender: {user.gender}</p>
          <p className="card-text">Email: {user.email}</p>
        </div>
        <div className="card-body"></div>
      </div>
    </div>
  );
};

export default User;
