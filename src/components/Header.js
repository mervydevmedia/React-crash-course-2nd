import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
   return(
      <header className='border-b p-3 flex justify-between items-center'>
         <Link to={'/'}>
            <h1 className='font-semibold'>AppName</h1>
         </Link>

         <Navigation />
      </header>
   )
}

export default Header;