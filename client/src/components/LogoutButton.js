import React from 'react';
import { Button } from 'react-bootstrap';
// import '../assets/css/style.css';

function LogoutButton() {
  return (
    <Button
      className='logout-button'
      as='a'
      href='/auth/logout'
    >
      Logout
    </Button>
  )
};

export default LogoutButton