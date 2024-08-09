import React from 'react';
import Recomendation from './Recomendation';

export default function Header () {
    return (
        <>
        <header>
            <nav>
                <div id='nav_left'>
                    <img src='#' alt="#" />
                </div>

                <div id='nav_right'>
                    <ul>
                        <li><a href="#"> </a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <Recomendation />
        </>
    );
};