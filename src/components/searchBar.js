import React from 'react';
import { NavBar } from './navbar';
import { NavBarTop } from './navbarTop';

const SearchBar = () => {
    return (
        <div>
            <NavBarTop />
            <h5 style={{ marginTop: '6%' }}>
                Lets search for stuffs from here!
            </h5>
            <NavBar />
        </div>
    );
}

export { SearchBar };