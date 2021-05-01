import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const Contact = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <h1 className="text-center">Get in touch</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row className="justify-content-center">
                    <Form.Group as={Col} xs="10" sm="6" md="6" lg="4" controlId="validationCustom01">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Your name"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="justify-content-center">
                    <Form.Group as={Col} xs="10" sm="6" md="6" lg="4" controlId="validationCustom02">
                        <Form.Control
                            required
                            type="email"
                            placeholder="Your mail"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="justify-content-center">
                    <Form.Group as={Col} xs="10" sm="6" md="6" lg="4" controlId="validationCustom02">
                        <Form.Control
                            required
                            type="textarea"
                            placeholder="Your message"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="justify-content-center">
                    <Form.Group as={Col} xs="10" sm="6" md="6" lg="4">
                        <Button className="w-100" type="submit">Send</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </>
    );
};

export default Contact;