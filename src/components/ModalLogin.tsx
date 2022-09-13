import React from 'react';
import { useContext } from 'react';
import Context from '../context/context';
import Login from './Login';

const ModalLogin = () => {
  const { openModal, setOpenModal } = useContext(Context);
  return (
    <div
      style={{ backgroundColor: 'rgb(0, 0, 0, 0.5)' }}
      className={`modal ${
        openModal && 'd-flex align-items-center justify-content-center'
      } `}
      tabIndex={-1}
      onClick={(event) => setOpenModal(false)}
    >
      <div
        className='modal-dialog'
        onClick={(event) => event.stopPropagation()}
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Login or registration</h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={() => setOpenModal(false)}
            ></button>
          </div>
          <div className='modal-body'>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
