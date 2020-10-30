import React from 'react';
import { NavBar } from '../components/navbar';
import './home.css';

const Home = () => {

    return (
        <div>
            <header className="App-header">
                <p>
                    Tableflash Gram
                </p>
            </header>
            <NavBar />
        </div>
    );

}

export { Home };