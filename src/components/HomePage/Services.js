import React from "react";
import styled from "styled-components";
import { FaUserPlus, FaSearchPlus } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
const Services = () => {
  return (
    <ServicesWrapp className='container-fluid p-0'>
      <div className='row flex-row-reverse m-0'>
        <article className='service col-md-4'>
          <span className='service-icon'>
            <FaUserPlus />
          </span>
          <h4 className='service-title'>قم بالتسجيل</h4>
        </article>
        <article className='service col-md-4'>
          <span className='service-icon'>
            <FaSearchPlus />
          </span>
          <h4 className='service-title'>اختر منتجاتك</h4>
        </article>
        <article className='service col-md-4'>
          <span className='service-icon'>
            <GoLocation />
          </span>
          <h4 className='service-title'>توصل بمنتجاتك</h4>
        </article>
      </div>
    </ServicesWrapp>
  );
};

const ServicesWrapp = styled.section`
  background: var(--white);
  text-align: center;
  .service {
    height:100%;
    padding: 2.5rem 0;
    text-align: center;
    transition: var(--mainTransition);
    color: var(--primaryColor-3);
    /* animation */
  }
  .service:hover {
    box-shadow: 0 2px var(--primaryColor-1);
    background: rgba(167, 210, 81, 0.4);
  }
  .service-icon {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
    transition: var(--mainTransition);
    display: inline-block;
    color: var(--primaryColor-2);
  }
  .service:hover .service-icon {
    transform: translateY(-5px);
  }
  .service-title {
    font-size: 1.35rem;
    margin: 0 auto;
    max-width: 85vw;
    font-family: var(--ff-title);
    /* font-weight: 700; */
  }
`;

export default Services;
