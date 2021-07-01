import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormCard from "../components/FormCard";

const AddBirthday = () => {
  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={6}>
          <Link className="btn btn-primary mb-2" to="/birthdays">
            Back
          </Link>
          <FormCard title="Add Birthday">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
              <Form.Text>Enter name of the person</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Birth Date</Form.Label>
              <Form.Control type="date" placeholder="Enter name" />
              <Form.Text>Select birth date of person</Form.Text>
            </Form.Group>
            <Button block>Create</Button>
          </FormCard>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBirthday;
