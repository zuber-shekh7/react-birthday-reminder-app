import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import FormCard from "../components/FormCard";
import { userSignIn } from "../actions/auth";

const Signin = ({signin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    signin(email, password)
    history.push('/birthdays')
    
  }
  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={6}>
          <Form onSubmit={handleSubmit}>
          <FormCard title="Sign in">
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control onChange={(email)=>setEmail(email.target.value)} required type="email" placeholder="Enter email" />
              <Form.Text>We won't share your email address</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Password</Form.Label>
              <Form.Control onChange={(password)=>setPassword(password.target.value)} required type="password" placeholder="Enter password" />
              <Form.Text>We store your password in encrypt form</Form.Text>
            </Form.Group>
            <Button type="submit" block>Sign in</Button>
            <small className="mt-4 d-block text-center">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </small>
          </FormCard>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return{
    signin: (email, password) => dispatch(userSignIn(email, password))
  }
}
export default connect(null, mapDispatchToProps)(Signin);
