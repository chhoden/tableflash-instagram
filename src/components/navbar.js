import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { BsPlusSquare } from 'react-icons/bs';
import { CgHome } from 'react-icons/cg';
import { VscHeart } from 'react-icons/vsc';
import { MdPersonOutline } from 'react-icons/md';
import './navbar.css';

const NavBar = () => {
    return (
        <Navbar fixed="bottom" bg="light" variant="light">
            <Nav className="navbar">
                <Link className="link" to="/home" ><CgHome className="icon" size={30} /></Link>
                <Link className="link" to="/searchBar"><FiSearch className="icon" size={30} /></Link>
                <Link className="link" to="/upload"><BsPlusSquare className="icon" size={30} /></Link>
                <Link className="link" to="/feed"><VscHeart className="icon" size={30} /></Link>
                <Link className="link" to="/profile"><MdPersonOutline className="icon" size={30} /></Link>
            </Nav>
        </Navbar>
    );
}

export { NavBar };