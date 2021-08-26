import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();

  const [registerInput, setRegister] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      username: registerInput.username,
      email: registerInput.email,
      password: registerInput.password,
    };
    axios.get('/sanctum/csrf-cookie').then((response) => {
      axios.post(`/api/register`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          history.push('/');
          localStorage.setItem('auth_name', res.data.username);
        } else {
          setRegister({
            ...registerInput,
            error_list: res.data.validation_errors,
          });
        }
      });
    });
  };

  return (
    <div className='pt-40'>
      <div className='ui center aligned grid'>
        <div className='seven wide column'>
          <h2 className='ui blue header'>
            <div className='content'>Register</div>
          </h2>
          <form onSubmit={registerSubmit} className='ui large form'>
            <div className='ui segment'>
              <div className='field'>
                <div className='ui left icon input '>
                  <i className='user icon'></i>
                  <input
                    type='text'
                    name='name'
                    value={registerInput.name}
                    onChange={handleInput}
                    placeholder='Full Name'
                  />
                  <span>{registerInput.error_list.name}</span>
                </div>
                <div className='ui left icon input mt-5'>
                  <i className='user outline icon'></i>
                  <input
                    type='text'
                    name='username'
                    value={registerInput.username}
                    onChange={handleInput}
                    placeholder='Username'
                  />
                  <span>{registerInput.error_list.username}</span>
                </div>
                <div className='ui left icon input mt-5'>
                  <i className='mail icon'></i>
                  <input
                    type='email'
                    name='email'
                    value={registerInput.email}
                    onChange={handleInput}
                    placeholder='E-mail'
                  />
                  <span>{registerInput.error_list.email}</span>
                </div>
                <div className='ui left icon input mt-5'>
                  <i className='lock icon'></i>
                  <input
                    type='password'
                    name='password'
                    value={registerInput.password}
                    onChange={handleInput}
                    placeholder='Password'
                  />
                  <span>{registerInput.error_list.password}</span>
                </div>
              </div>
            </div>
            <button type='submit' className='ui fluid large blue button'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
