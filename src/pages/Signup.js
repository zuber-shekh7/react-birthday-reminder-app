import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userSignUp } from "../actions/auth";
import FormCard from "../components/FormCard";

const Signup = ({ signup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return;
    }
    signup(email, password, password2);
  };

  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={6}>
          <Form onSubmit={handleSubmit}>
            <FormCard title="Sign up">
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  onChange={(email) => setEmail(email.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text>We won't share your email address</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email Password</Form.Label>
                <Form.Control
                  required
                  onChange={(password) => setPassword(password.target.value)}
                  type="password"
                  placeholder="Enter password"
                />
                <Form.Text>We store your password in encrypt form</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  onChange={(password2) => setPassword2(password2.target.value)}
                  type="password"
                  placeholder="Re-enter password"
                />
                <Form.Text>Enter same password as below</Form.Text>
              </Form.Group>
              <Button type="submit" block>
                Sign up
              </Button>
              <small className="mt-4 d-block text-center">
                Already have an account? <Link to="/signin">Sign in</Link>
              </small>
            </FormCard>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, password, password2) =>
      dispatch(userSignUp(email, password, password2)),
  };
};
export default connect(null, mapDispatchToProps)(Signup);
