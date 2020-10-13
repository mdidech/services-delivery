import React from "react";
import styled from "styled-components";
import bgcover from "../img/bgcover.png";
import smbgcover from "../img/smbgcover.png";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <WrappHeader className='header' img_lg={bgcover} img_sm={smbgcover}>
      <div className='container p-3 d-flex justify-content-center align-items-center h-100'>
        <motion.div
          className='banner'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h1 className='title'>خدمات التوصيل</h1>
          <h1 className='text'>كل مستلزماتك حتى لباب دارك</h1>
        </motion.div>
      </div>
    </WrappHeader>
  );
};

const WrappHeader = styled.div`
  height: 50vh;
  /* background: var(--primaryColor-2); */
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${(props) => props.img_sm}) no-repeat center/cover fixed;
  .banner {
    /* width: 60%; */
    font-family: var(--ff-title);
    text-align: center;
    border: 8px solid var(--primaryColor-1);
    background: linear-gradient(
      rgba(167, 210, 81, 0.6),
      rgba(167, 210, 81, 0.6)
    );
    padding: 1.5rem 0.75rem;
  }
  .title {
    color: var(--white);
    font-size: 3rem;
  }
  .text {
    font-size: 2rem;
    color: var(--primaryColor-3);
  }
  @media screen and (min-width: 768px) {
    background: linear-gradient(rgba(255, 167, 67, 0.3), rgba(0, 0, 0, 0.3)),
      url(${(props) => props.img_lg}) no-repeat center/cover fixed;
    height: 65vh;
    .banner {
      width: 80%;
      border: none;
      text-align: right;
      background: none;
    }
    .title {
      font-size: 3.75rem;
    }
    .text {
      font-size: 2.75rem;
    }
  }
`;
export default Header;
