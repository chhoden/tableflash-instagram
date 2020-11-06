import React from 'react';
import { NavBar } from './navbar';
import { NavBarTop } from './navbarTop';

const Profile = () => {
    return (
        <div>
            <h5 style={{ marginTop: '6%' }}>
                Your profile looks pretty empty.
            </h5>
            <NavBarTop />
            <NavBar />
        </div>
    );
}

export { Profile };