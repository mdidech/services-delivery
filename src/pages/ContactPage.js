import React from "react";
import styled from "styled-components";
const ContactPage = () => {
  return (
    <ContactWrapp className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <div className='title-underline'></div>
          <div className='title my-3'>
            <h1> اتصل بنا</h1>
          </div>
          <div className='title-underline'></div>
          <form className='mt-5'>
            <div className='form-group p-1'>
              <input
                type='text'
                placeholder='الاسم'
                className='form-control'
                name='nom'
              />
              <input
                type='text'
                placeholder='البريد الالكتروني'
                className='form-control'
                name='email'
              />
              <textarea
                rows='5'
                className='form-control'
                // style={styleForm}
                name='message'
                placeholder='نص الرسالة'
              ></textarea>
            </div>

            <button
              type='submit'
              className='form-control  btn btn-outline-warning font-weight-bold'
            >
              ارسل الآن
            </button>
          </form>
        </div>
      </div>
    </ContactWrapp>
  );
};

const ContactWrapp = styled.div`
  min-height: 80vh;
  .title-underline {
    height: 0.25rem;
    width: 30vw;
    background: var(--primaryColor-2);
    margin: 0 auto;
  }
  input,
  textarea {
    text-align: right;
  }
  .title {
    text-align: center;
    color: var(--primaryColor-3);
  }
  .form-control {
    color: var(--primaryColor-3);
    margin-bottom: 1.5rem;
  }
`;
export default ContactPage;
