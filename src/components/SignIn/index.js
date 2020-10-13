import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { firebaseAuth } from "../../context/firebase";
import { ServiceContext } from "../../context/context";
import Alert from "../Alert";

const Index = () => {
  const { authUser, setAlerts } = useContext(ServiceContext);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [firebaseError, setFirebaseError] = useState(null);
  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userCredentials);
    await setUserCredentials({
      email: "",
      password: "",
    });
  };

  const login = ({ email, password }) => {
    try {
      firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .then((userLogged) => {
          console.log(userLogged);
        })
        .catch((err) => {
          setFirebaseError(err.code);
          setAlerts("البريد الالكتروني أو كلمة المرور خاطئة");
        });
    } catch (err) {
      console.log(err);
    }
  };
  const checkServerErrors = () => {
    if (firebaseError) {
      if (
        firebaseError === "auth/wrong-password" ||
        firebaseError === "auth/user-not-found"
      ) {
        return <Alert />;
      }
    }
  };
  return authUser ? (
    <Redirect to='/' />
  ) : (
    <LoginWrapper className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <div className='title-underline'></div>
          <div className='title my-3'>
            <h1> تسجيل الدخول</h1>
          </div>
          <div className='title-underline'></div>
          <form className='mt-5' onSubmit={handleSubmit}>
            {checkServerErrors()}
            <div className='form-group'>
              <input
                type='email'
                required
                className='form-control'
                name='email'
                placeholder='البريج الالكتروني'
                autoComplete='off'
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                required
                className='form-control'
                name='password'
                placeholder='كلمة المرور'
                autoComplete='off'
                onChange={handleChange}
              />
            </div>
            <div className='form-group mt-3'>
              <button
                type='submit'
                className='form-control  btn btn-outline-warning font-weight-bold'
              >
                تسجيل الدخول
              </button>
            </div>
            <div className='form-group text-center'>
              <p>
                <span className='text'> لا تملك حساب ؟</span>
                <Link to='/register' className='text-decoration-none'>
                  <span className='register-link text-warning pr-2 '>
                    {" "}
                    إنشاء حساب
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.section`
  input {
    text-align: right;
  }
  .title {
    text-align: center;
    color: var(--primaryColor-3);
  }
  .title-underline {
    height: 0.25rem;
    width: 30vw;
    background: var(--primaryColor-2);
    margin: 0 auto;
  }
  .text {
    font-size: 1rem;
    color: var(--primaryColor-3) !important;
  }
  .form-control {
    color: var(--primaryColor-3);
  }
  .register-link {
    font-size: 1rem;
  }
`;
export default Index;
