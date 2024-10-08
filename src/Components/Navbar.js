import React from 'react';
import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Logout from './Logout';
import './sign.css'

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        (
            <nav className='naver'>
                <div className='nav1'>
                    <img src='https://static.vecteezy.com/system/resources/previews/009/027/542/non_2x/kbc-logo-kbc-letter-kbc-letter-logo-design-initials-kbc-logo-linked-with-circle-and-uppercase-monogram-logo-kbc-typography-for-technology-business-and-real-estate-brand-vector.jpg' className='kbc' alt='logo'/>
                    {!isLoggedIn ? (
                            <><Link to='/login'>
                                <button className='nb' >
                                    Login 
                                </button></Link>
    
                            </>
                        ) : (
                            <Logout setIsLoggedIn={setIsLoggedIn} />
                        )}
                </div>
            </nav>
        )
    );

    
};
