import React from 'react';
import { NavBar } from './navbar';
import { NavBarTop } from './navbarTop';

const Upload = () => {
    return (
        <div>
            <NavBarTop />
            <p>Upload is done from here</p>
            <NavBar />
        </div>
    );
}

export { Upload };