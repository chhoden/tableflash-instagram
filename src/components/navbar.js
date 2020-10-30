import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { BsHeart, BsPlusSquare } from 'react-icons/bs';
import { CgHome } from 'react-icons/cg';
import { MdPersonOutline } from 'react-icons/md';
import './navbar.css';

const NavBar = () => {
    return (
        <Navbar fixed="bottom" bg="light" variant="light">
            <Nav className="mr-auto">
                <Link className="link" to="/home" style={{ color: "black" }}><CgHome /></Link>
                <Link className="search" to="/searchBar" style={{ color: "black" }}><FaSearch /></Link>
                <Link className="link" to="/upload" style={{ color: "black" }}><BsPlusSquare /></Link>
                <Link className="feed" to="/feed" style={{ color: "black" }}><BsHeart /></Link>
                <Link className="profile" to="/profile" style={{ color: "black" }}><MdPersonOutline /></Link>
            </Nav>
        </Navbar>
    );
}

export { NavBar };