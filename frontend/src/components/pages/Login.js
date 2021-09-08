import React, { useState } from 'react';
import { useHistory } from 'react-router';
import LoginAPI from '../../apis/LoginAPI';

const Login = () => {
  const history = useHistory();

  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
    error_list: [],
  });

  const [invalidMessage, setinvalidMessage] = useState('');

  const handleInput = (e) => {
    e.persist();
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    LoginAPI.saveLogin(data).then((res) => {
      if (res.data.status === 200) {
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
        history.push('/');
      } else if (res.data.status === 401) {
        setinvalidMessage(res.data.message);
      } else {
        setLoginInput({
          ...loginInput,
          error_list: res.data.validation_errors,
        });
      }
    });
  };

  return (
    <div className='pt-40'>
      <div className='ui center aligned grid'>
        <div className='seven wide column'>
          <h2 className='ui blue header'>
            <div className='content'>Login</div>
          </h2>
          <form onSubmit={loginSubmit} className='ui large form'>
            <div className='ui segment'>
              <div className='field'>
                <div className='ui left icon input mt-5'>
                  <i className='mail icon'></i>
                  <input
                    type='email'
                    name='email'
                    value={loginInput.email}
                    onChange={handleInput}
                    placeholder='E-mail'
                  />
                </div>
                <span>{loginInput.error_list.email}</span>
                <div className='ui left icon input mt-5'>
                  <i className='lock icon'></i>
                  <input
                    type='password'
                    name='password'
                    value={loginInput.password}
                    onChange={handleInput}
                    placeholder='Password'
                  />
                </div>
                <span>{loginInput.error_list.password}</span>
              </div>
              <span>{invalidMessage}</span>
            </div>
            <button type='submit' className='ui fluid large blue button'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
