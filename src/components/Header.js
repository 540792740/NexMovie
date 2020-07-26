import React from 'react';
import netflix from '../asserts/netflix.png'

function Header(props) {
    return (
        <div className='header'>
            <img src={netflix}/>
            <div className='title'>Movie</div>
            <div className='login'>
                <a>Login</a>
                <a>Register</a>
            </div>
        </div>
    );
}

export default Header;
