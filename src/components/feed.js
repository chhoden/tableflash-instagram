import React from 'react';
import { NavBar } from './navbar';
import { NavBarTop } from './navbarTop';

const Feed = () => {
    return (
        <div>
            <NavBarTop />
            <p>
                Keep track of your feeds here.
            </p>
            <NavBar />
        </div>
    );
}

export { Feed };