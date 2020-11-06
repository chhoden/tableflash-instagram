import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavBar } from './navbar';
import { NavBarTop } from './navbarTop';

const Upload = () => {
    return (
        <div className="d-flex justify-content-center" style={{ marginTop: '15%' }}>
            <NavBarTop />
            <Form className="form">
                <h5 className="header" style={{ textAlign: 'center' }}> Upload Image</h5>
                <Form.Group controlId="formBasicFile" width="fit-content">
                    <Form.Label >Image description</Form.Label>
                    <Form.Control name="imageDescription" type="text" />
                    <br />
                    <Form.Control name="image" type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>

            <NavBar />
        </div >
    )
}

export { Upload };