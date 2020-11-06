import React from 'react';
import { Navbar } from 'react-bootstrap'
import './navbarTop.css';

const NavBarTop = () => {
    return (
        <Navbar fixed="top" bg="light" variant="light">
            <Navbar.Brand className="brand mx-auto" href="/home" >
                Tableflash Gram
             </Navbar.Brand>
        </Navbar>
    );
}

export { NavBarTop };