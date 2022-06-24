import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <img id="img" src='https://www.futurity.org/wp/wp-content/uploads/2020/06/quantum-computer-programming-language-silq_1600.jpg' alt='logo'/>
        <div className='links'>
        <Link to='/'><h4>Home</h4> </Link>
        <Link to='/about'> <h4>About Us</h4></Link>
        </div>
        

        
    </div>
        
  )
}

export default Header