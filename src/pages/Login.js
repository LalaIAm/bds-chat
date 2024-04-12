import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import { socket } from '../socket';
import { connectUser } from '../redux/features/user.slice';
import {useDispatch} from 'react-redux'

const Login = () => {
  const [nickname, setNickname] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const isDisabled = nickname.length < 4 || nickname.length > 60;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled) return;
    socket.auth = { username: nickname }
    dispatch(connectUser(nickname))
    socket.connect()

    navigate('/main');
  };

  return (
    <div className='page login'>
      <div className='logo-wrapper'>
        <img className='logo' alt='logo' src={logo} />
      </div>
      <main className='content-wrapper'>
        <form onSubmit={handleSubmit}>
          <div className='title-box'>
            <h2>Please enter your nickname and join the chat</h2>
          </div>
          <div className='input-wrapper'>
            <label htmlFor='nickname'>Nickname</label>
            <input
              id='nickname'
              name='nickname'
              placeholder='Enter your nickname'
              className='login-input'
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />
          </div>
          <button disabled={isDisabled} className='btn login-btn'>
            Join Chat
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
