import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
// import UserContext from '../utils/UserContext';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';

const MyNavbar = () => {

  // const userContext = useContext(UserContext);
  // useEffect(() => {
  //   userContext.checkLogin();
  // }, []);

  // let button;

  // if (!userContext.isLoggedIn) {
  //   button = <LoginButton />
  // } else {
  //   button = <LogoutButton />
  // }

  return (
    <Navbar fixed='top' className='px-5 bg-dark navbar-dark' expand="md">
       <Navbar.Brand
      
      as={Link}
      to={{pathname: '/'}}
      
      // , state: {isLoggedIn: userContext.isLoggedIn}}}

      >MyHikes
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* <Link className="nav-link text-light mx-2" to="/">
              Home
            </Link> */}
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/AddHike">
              Add a Hike
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/MyHikes">
              Completed Hikes
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/PlanHike">
              Plan a Hike
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link text-light mx-2" to="/PlannedHikes">
              Hikes to Do
            </Link>
          </li>
        </ul>
        {/* <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'> */}
        <Nav>
          {/* {button} */}
        </Nav>
      {/* </Navbar.Collapse> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
