import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormCard from "../components/FormCard";

const Signin = () => {
  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={6}>
          <FormCard title="Sign in">
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text>We won't share your email address</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
              <Form.Text>We store your password in encrypt form</Form.Text>
            </Form.Group>
            <Button block>Sign in</Button>
            <small className="mt-4 d-block text-center">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </small>
          </FormCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
