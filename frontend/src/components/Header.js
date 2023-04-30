import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  return ( 
    <div className='topnav' id="header">
      <a href="/#">Movie Maker</a>
      <Link smooth to='#addNewMovie' className='add-button'>Add Movie</Link>
    </div>
   );
}
 
export default Header;