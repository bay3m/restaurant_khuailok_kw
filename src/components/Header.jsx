import React from 'react';
import Recomendation from './Recomendation';

export default function Header () {
    return (
        <>
        <header>
            <nav className='navbar'>
                <div id='nav_left'>
                    <img src='../../images/logo.jpg' alt="logo" />
                </div>

                <div id='nav_right'>
                    <ul>
                        <li><a href="#"> about </a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <Recomendation />
        </>
    );
};