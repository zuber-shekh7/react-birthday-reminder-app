import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormCard from "../components/FormCard";

const Signup = () => {
  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={6}>
          <FormCard title="Sign up">
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
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Re-enter password" />
              <Form.Text>Enter same password as below</Form.Text>
            </Form.Group>
            <Button block>Sign up</Button>
            <small className="mt-4 d-block text-center">
              Already have an account? <Link to="/signin">Sign in</Link>
            </small>
          </FormCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
