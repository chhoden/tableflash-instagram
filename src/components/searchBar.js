import React from 'react';
import { NavBar } from './navbar';
import { NavBarTop } from './navbarTop';

const SearchBar = () => {
    return (
        <div>
            <NavBarTop />
            <p>
                Lets search for stuffs from here!
            </p>
            <NavBar />
        </div>
    );
}

export { SearchBar };