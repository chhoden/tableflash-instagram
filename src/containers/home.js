import React, { useEffect, useState } from 'react';
import { NavBar } from '../components/navbar';
import { NavBarTop } from '../components/navbarTop';
import './home.css';

const Home = () => {
    const [photos, setPhotos] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/photos")
    //         .then(response => response.json)
    //         .then(data => {
    //             setPhotos(data);
    //         })

    // }, [])

    return (
        <div>
            <NavBarTop />
            <NavBar />
        </div>
    );

}

export { Home };