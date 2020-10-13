import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function Error() {
  return (
    <ErrorWrapper className='container d-flex flex-column justify-content-center align-items-center'>
      <div className='row error-div flex-column justify-content-center align-items-center mt-5 p-5 border border-warning rounded'>
        <h1>oops! 404 Erreur</h1>
        <Link to='/' className='btn btn-success mt-2'>
          الصفحة الرئيسية
        </Link>
      </div>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.section`
  color: var(--primaryColor-3);
  min-height: 80vh;
  .error-div:hover {
    background: linear-gradient(
      rgba(255, 167, 67, 0.6),
      rgba(167, 210, 81, 0.95)
    );
  }
`;
