import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Page404.css';


function Page404() {
  return (
    <div className='page-404'>
        <Link to="/"> Back to Home</Link>
        <div className='error'>
        <p id='h5'>ERROR 404</p>
        <p><u>The route entered does not exist,please try again!!!</u></p>
        </div>
    </div>
  )
}

export default Page404