import React from "react";
import styled from "styled-components";
import mobileapp from "../../img/mobileapp.jpg";
const MobileApp = () => {
  return (
    <MovileAppWrapp>
      <div className='container text-center my-3 p-3'>
        <p className='title'>...قريبا</p>
        <div className='title-underline'></div>
        <img src={mobileapp} className='img-mobileapp m-5' alt='' />
      </div>
    </MovileAppWrapp>
  );
};
const MovileAppWrapp = styled.section`
background:#F9F9F9;
  .title {
    color: var(--primaryColor-3);
    font-size: 2rem;
    font-family: var(--ff-title);
    text-align: center;
    font-weight: bold;
  }
  .title-underline {
    height: 0.25rem;
    width: 30vw;
    background: var(--primaryColor-2);
    margin: 0 auto;
  }
  .img-mobileapp {
    width: 25vh;
  }
`;

export default MobileApp;
