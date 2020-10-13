import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='container py-3 mx-auto'>
        <div className='row justify-content-center align-items-center'>
          <div className=' col-lg-10 col-md-12'>
            <p className='text-capitalize copyright'>
              copyright &copy; lbody delivery 2020
            </p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.footer`
  background: var(--primaryColor-3);
  color: var(--white);
  @media (max-width: 768px) {
    width: 100vw;
  }
  .copyright {
    font-size: 1rem;
    text-align: center;
  }
`;
export default Footer;
