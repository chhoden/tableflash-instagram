import React from 'react';
import { Image, Col, Container, Row } from 'react-bootstrap'
import { NavBar } from '../components/navbar';
import { NavBarTop } from '../components/navbarTop';
import { photos } from '../data/photos';
import './home.css';


const Home = () => {
    return (
        <Container className="mt-5">
            <NavBarTop />
            <Row className="mb-4" style={{ marginTop: '2%' }}>
                {
                    photos.map((photo) =>
                        <Col md="4">
                            <Image alt={photo.name} src={photo.src} className="img-fluid" style={{ height: 'auto' }} />
                        </Col>
                    )
                }
            </Row>
            <NavBar />
        </Container>
    );

}

export { Home };