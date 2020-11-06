import React from 'react';
import { NavBar } from './navbar';
import { NavBarTop } from './navbarTop';

const Feed = () => {
    return (
        <div>
            <NavBarTop />
            <h5 style={{ marginTop: '6%' }}>
                Keep track of your feeds here.
            </h5>
            <NavBar />
        </div>
    );
}

export { Feed };