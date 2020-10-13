import React, { useContext, useState } from "react";
import { ServiceContext } from "../../context/context";
import { Link, Redirect } from "react-router-dom";
import { firebaseAuth } from "../../context/firebase";
import firebase from "../../context/firebase";
import { FaInfoCircle } from "react-icons/fa";
import styled from "styled-components";

const Register = () => {
  const { authUser, setAlerts } = useContext(ServiceContext);
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [firebaseError, setFirebaseError] = useState(null);
  const register = async ({ name, email, password }) => {
    await firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCreated) => {
        await userCreated.user.updateProfile({
          displayName: name,
        });
        firebase.collection("users").add({
          nom: name,
          email: email,
          adresse: "",
          ville: "",
          pays: "",
          telephone: "",
        });
      })
      .catch((err) => {
        setFirebaseError(err.code);
        setAlerts(" بريد الكتروني سبق استخدامه ");
      });
  };
  const checkServerErrors = () => {
    if (firebaseError) {
      if (firebaseError === "auth/email-already-in-use") {
        return (
          alert !== null && (
            <div className='alert alert-danger'>
              <FaInfoCircle /> بريد الكتروني سبق استخدامه
            </div>
          )
        );
      }
    }
  };
  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register(userCredentials);
    setUserCredentials({
      name: "",
      email: "",
      password: "",
    });
  };
  return authUser ? (
    <Redirect to='/' />
  ) : (
    <RegisterWrapper className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <div className='title-underline'></div>
          <div className='title my-3'>
            <h1> سجل الآن </h1>
          </div>
          <div className='title-underline'></div>
          <form className='mt-5' onSubmit={handleSubmit}>
            {checkServerErrors()}
            <div className='form-group'>
              <input
                type='text'
                required
                className='form-control'
                name='name'
                placeholder=' الاسم العائلي و الشخصي'
                autoComplete='off'
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                required
                className='form-control'
                name='email'
                placeholder='البريد الالكتروني'
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
                className='form-control btn btn-outline-warning font-weight-bold'
              >
                تسجيل مستخدم جديد
              </button>
            </div>
            <div className='form-group text-center'>
              <p>
                <span className='text'>هل لديك حساب؟</span>
                <Link to='/login' className='text-decoration-none'>
                  <span className='signin-link text-warning pr-2 '>
                    تسجيل الدخول
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.section`
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
    color: var(--primaryColor-3);
  }
  .form-control {
    color: var(--primaryColor-3) !important;
  }
  .signin-link {
    font-size: 1rem;
  }
`;

export default Register;
