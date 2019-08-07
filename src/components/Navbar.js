import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <nav>
      <Link className='link' to='/'>Guy Arieli</Link>
      <Link className='link' to='/websites'>Websites</Link>
      <Link className='link' to='/web-apps'>Web Apps</Link>
    </nav>
  );
};

export default Header;
