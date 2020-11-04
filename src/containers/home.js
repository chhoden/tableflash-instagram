import React from 'react';
import { Image, Col, Container, Row } from 'react-bootstrap'
import { NavBar } from '../components/navbar';
import { NavBarTop } from '../components/navbarTop';
import { photos } from '../data/photos';
import './home.css';


const Home = () => {
    return (
        <Container fluid>
            <NavBarTop />
            <Row>
                {
                    photos.map((photo) =>
                        <Col xs={12} md={4} height={10}>
                            <Image alt={photo.name} src={photo.src} fluid />
                        </Col>
                    )
                }
            </Row>
            <NavBar />
        </Container>
    );

}

export { Home };