import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Register.css'

const Register = () => {
    return(
        <div className="wrapper-register">
            {/* <h2>Sign up today and start beting</h2> */}
            <Card className="card-register">
            <Form className="register-form">
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control type="email" placeholder="First Name" />
                <Form.Text className="text-muted">
                    <p>Signing up signifies that you have read and agree to the Terms of Service and our Privacy Policy.</p>
                </Form.Text>
            </Form.Group>

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control placeholder="Email address" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control placeholder="Confirm password" />
            </Form.Group>

            <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Is Admin" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-register">
                Submit
            </Button>
            </Form>
            </Card>
        </div>
    );
}

export default Register;