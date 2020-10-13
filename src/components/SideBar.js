import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ServiceContext } from "../context/context";
import { firebaseAuth } from "../context/firebase";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const Sidebar = () => {
  const { sidebarOpen, handleSidebar, authUser } = useContext(ServiceContext);
  const logout = async () => {
    await firebaseAuth.signOut();
  };
  return (
    <Fragment>
      <SideWrapper show={sidebarOpen}>
        <div className='menu text-white'>
          <h4 className='text-center py-3'>القائمة الرئيسية</h4>
          <ul>
            <li>
              <Link
                to='/'
                className='sidebar-link text-right link'
                onClick={handleSidebar}
              >
                الصفحة الرئيسية <HomeIcon className="text-warning" />
              </Link>
            </li>
            <li>
              <Link
                to='/panier'
                className='sidebar-link text-right link'
                onClick={handleSidebar}
              >
                سلة المشتريات <ShoppingCartIcon className="text-warning" />
              </Link>
            </li>
            <li>
              <Link
                to='/contact-nous'
                className='sidebar-link text-right link'
                onClick={handleSidebar}
              >
                اتصل بنا <ContactMailIcon className="text-warning" />
              </Link>
            </li>

            {authUser ? (
              <>
                <li>
                  <Link
                    to='/moncompte'
                    className='sidebar-link text-right link'
                    onClick={handleSidebar}
                  >
                    حسابي <AccountCircleIcon className="text-warning" />
                  </Link>
                </li>

                <li>
                  <Link
                    to='/login'
                    className='sidebar-link text-right link'
                    onClick={() => {
                      logout();
                      handleSidebar();
                    }}
                  >
                    تسجيل الخروج <ExitToAppIcon className="text-warning" />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to='/login'
                    className='sidebar-link text-right link'
                    onClick={handleSidebar}
                  >
                    تسجيل الدخول <ExitToAppIcon className="text-warning" />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </SideWrapper>
    </Fragment>
  );
};
const SideWrapper = styled.nav`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white);
  z-index: 1;
  border-right: 4px solid var(--primaryColor-1);
  transition: var(--mainTransition);
  /* transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")}; */
  display: ${(props) => (props.show ? "block" : "none")};
  ul {
    list-style-type: none;
    padding: 0 !important;
  }

  .sidebar-link {
    display: block;
    font-size: 1.25rem;
    text-transform: capitalize;
    color: var(--primaryColor-3);
    padding: 1.25rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: linear-gradient(
      to right,
      rgba(255, 167, 67, 0.95),
      rgba(167, 210, 81, 0.95)
    );
    color: var(--white);
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 18rem;
    /* display:none; */
  }
  h4 {
    font-size: 1.5rem;
    margin: 0;
    background: linear-gradient(
      to right,
      rgba(255, 167, 67, 0.95),
      rgba(167, 210, 81, 0.95)
    );
    padding: 0.5rem 1rem;
  }
`;

export default Sidebar;
