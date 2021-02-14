import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ServiceContext } from "../context/context";
import { FaBars, FaCartPlus } from "react-icons/fa";
import CloseIcon from "@material-ui/icons/Close";
import MonCompteMenus from "./DropDownList";

const Navbar = () => {
  const { cartItems, authUser, handleSidebar, sidebarOpen } = useContext(
    ServiceContext
  );
  return (
    <NavbarWrapper>
      <div className='container'>
        <div className='navbar-header'>
          <Link to='/' className='title-link'>
            l'boy delivery
          </Link>
          <div className='toggle-button'>
            {sidebarOpen ? (
              <button
                onClick={handleSidebar}
                className='border-0 bg-transparent'
              >
                <CloseIcon className='close' />
              </button>
            ) : (
              <button
                onClick={handleSidebar}
                className='border-0 bg-transparent'
              >
                <FaBars className='bars' />
              </button>
            )}
          </div>
          <div className='navbar-list py-1'>
            <ul>
              <li>
                <Link to='/contact-nous' className='nav-item'>
                  اتصل بنا
                </Link>
              </li>
              {authUser ? (
                <li>
                  <MonCompteMenus />
                </li>
              ) : (
                <li>
                  <Link to='/login' className='nav-item btn'>
                    تسجيل الدخول
                  </Link>
                </li>
              )}
              <li>
                <div className='nav-cart'>
                  <Link to='/panier' className='nav-item '>
                    <FaCartPlus className='nav-icon' />
                    <div className='cart-items text-center'>{cartItems}</div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};
const NavbarWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 167, 67, 0.95),
    rgba(167, 210, 81, 0.95)
  );
  /* background-color: var(--primaryColor-1); */
  border-bottom: 5px solid var(--primaryColor-2);
  .container {
    width: 85vw;
    margin: 0 auto;
  }
  .navbar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 60px; */
    padding: 0.35rem 0;
  }
  .title-link {
    color: var(--clr-secondary-3);
    font-size: 1.75rem;
    margin: 0.5rem;
    text-decoration: none;
    font-family: var(--ff-title);
    color: var(--primaryColor-3);
  }
  .navbar-list ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  .navbar-list li {
    list-style: none;
  }
  .navbar-list .nav-item {
    text-decoration: none;
    color: #fff;
    display: block;
    padding: 0.25rem 1.25rem;
    border: 1px solid orange;
    border-radius: 25px;
  }
  .toggle-button {
    display: none;
    position: absolute;
    top: 0.75rem;
    right: 1.2rem;
    cursor: pointer;
    width: 30px;
    height: 18px;
  }
  .bars {
    font-size: 2rem;
    color: #fff;
    transition: var(--mainTransition);
  }
  .close {
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    transition: var(--mainTransition);
  }
  .navbar-list ul li:hover {
    background: var(--clr-secondary-3);
  }
  .nav-cart {
    position: relative;
    padding-left: 0.55rem;
  }
  .cart-items {
    background: var(--primaryColor-2);
    color: var(--white);
    font-size: 0.85rem;
    position: absolute;
    top: 0px;
    left: 35px;
    padding: 0 5px;
    border-radius: 50%;
  }
  @media screen and (max-width: 768px) {
    .container {
      width: 100vw;
    }
    .toggle-button {
      display: flex;
    }
    .navbar-header {
      flex-direction: column;
      align-items: flex-start;
    }
    .navbar-list {
      width: 100%;
      display: none;
    }
    .navbar-list ul {
      flex-direction: column;
      width: 100%;
    }
    .navbar-list li {
      text-align: center;
    }
    .navbar-list ul .nav-item {
      /* padding: 0.7rem 1rem; */
      font-size: 1.2rem;
      font-weight: bold;
    }
    .active {
      display: flex;
    }
    .title-link {
      font-size: 18px;
    }
    .nav-icon {
      color: var(--white);
    }
  }
`;

export default Navbar;
