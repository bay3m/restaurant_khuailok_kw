import React from 'react';
import { Link } from 'react-router-dom';
import Recomendation from './Recomendation';
import About from './About';

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
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <Recomendation />
        </>
    );
};