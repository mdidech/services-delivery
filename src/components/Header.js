import React from "react";
import styled from "styled-components";
import bgcover from "../img/bgcover.png";
import smbgcover from "../img/smbgcover.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <WrappHeader className='header' img_lg={bgcover} img_sm={smbgcover}>
      <div className='container p-3 d-flex justify-content-end align-items-center h-100'>
        <motion.div
          className='banner'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h1 className='title'>خدمات التوصيل</h1>
          <h2 className='text'>كل مستلزماتك حتى لباب دارك</h2>
          <a href='/#sousCategories' className='cta-btn'>
            اختر منتجاتك
          </a>
        </motion.div>
      </div>
    </WrappHeader>
  );
};

const WrappHeader = styled.div`
  min-height: 50vh;
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
    margin: 0 auto;
  }
  .title {
    color: var(--white);
    font-size: 2.5rem;
    color: rgba(255, 225, 255, 0.95);
  }
  .text {
    font-size: 1.5rem;
    color: var(--primaryColor-3);
  }
  .cta-btn {
    /* background: var(--primaryColor-2); */
    color: white;
    padding: 0.25em 1.25em;
    border-radius: 25px;
    border: 2px solid orange;
    text-decoration: none;
    display: inline-block;
    margin-top: 1em;
    font-size: 1.2rem;
    transition: all 0.3s linear;
  }
  .cta-btn:hover {
    background: #ef891c;
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
      margin-right: 0;
    }
    .title {
      font-size: 4rem;
      font-weight: bold;
    }
    .text {
      font-size: 1.75rem;
    }
  }
`;
export default Header;
