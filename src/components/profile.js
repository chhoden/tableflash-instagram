import React from 'react';
import { NavBar } from './navbar';
import { NavBarTop } from './navbarTop';

const Profile = () => {
    return (
        <div>
            <p>
                Your profile looks pretty.
            </p>
            <NavBarTop />
            <NavBar />
        </div>
    );
}

export { Profile };