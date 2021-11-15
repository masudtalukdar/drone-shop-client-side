import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import UseFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
  const { createUserWithEmail, signInWithEmail, googleSignIn, user } =
    UseFirebase();
  const [userdata, setUserData] = useState({});
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const newData = { ...userdata, email: e.target.value };
      setUserData(newData);
    }
    if (e.target.name === 'pass') {
      const newData = { ...userdata, pass: e.target.value };
      setUserData(newData);
    }
    if (e.target.name === 'name') {
      const newData = { ...userdata, name: e.target.value };
      setUserData(newData);
    }
  };
  const handleSubmit = () => {
    console.log(userdata);
    createUserWithEmail(userdata.name, userdata.email, userdata.pass);
  };
  const handlelogin = () => {
    signInWithEmail(userdata.email, userdata.pass);
  };
  const location = useLocation();
  console.log(location.state);
  const { from } = location.state || { from: '/' };
  const history = useHistory();
  console.log(from);
  useEffect(() => {
    if (user.email) {
      history.replace(from);
    }
  }, [user]);

  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <div className='form d-flex justify-content-center align-items-center p-5'>
        {signUp ? (
          <div className='signIn'>
            <h3 className='mb-5 text-white'>Sign Up</h3>
            <input
              name='name'
              onBlur={handleChange}
              type='text'
              placeholder='Name'
            />
            <br />
            <br />
            <input
              name='email'
              onBlur={handleChange}
              type='email'
              placeholder='Email'
            />
            <br />
            <br />
            <input
              name='pass'
              onBlur={handleChange}
              type='password'
              placeholder='Password 6 characters'
            />
            <br />
            <br />
            <button className='btn btn-danger' onClick={handleSubmit}>
              register
            </button>
            <button
              className='btn btn-primary mx-2'
              onClick={() => setSignUp(false)}
            >
              Login
            </button>
          </div>
        ) : (
          <div className='p-5 login'>
            <h3 className='mb-5 text-white'>log in</h3>
            <input
              name='email'
              onBlur={handleChange}
              type='email'
              placeholder='Email'
            />
            <br />
            <br />
            <input
              name='pass'
              onBlur={handleChange}
              type='password'
              placeholder='Password'
            />
            <br />
            <br />
            <button className='btn btn-success' onClick={handlelogin}>
              log in
            </button>
            <button
              className='btn btn-primary mx-2'
              onClick={() => setSignUp(true)}
            >
              Sign Up
            </button>
            <br />
            <br />
            <div>
              <button className='btn btn-danger' onClick={googleSignIn}>
                SignIn With Goggle
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
