import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addBirthday } from "../actions/birthdays";
import FormCard from "../components/FormCard";

const AddBirthday = ({ addBirthday }) => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const [image, setImage] = useState(null);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    addBirthday(name, birthdate, image);
    history.push("/birthdays/");
  };

  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={6}>
          <Link className="btn btn-primary mb-2" to="/birthdays">
            Back
          </Link>
          <Form onSubmit={handleSubmit}>
            <FormCard title="Add Birthday">
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  onChange={(name) => setName(name.target.value)}
                  type="text"
                  placeholder="Enter name"
                />
                <Form.Text>Enter name of the person</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  required
                  onChange={(date) => setBirthdate(date.target.value)}
                  type="date"
                  placeholder="Enter name"
                />
                <Form.Text>Select birth date of person</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  required
                  onChange={(image) => setImage(image.target.files[0])}
                  type="file"
                  placeholder="Select Photo"
                />
                <Form.Text>Upload photo of person</Form.Text>
              </Form.Group>
              <Button type="submit" block>
                Create
              </Button>
            </FormCard>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispathToProps = (dispatch) => {
  return {
    addBirthday: (name, birthdate, image) =>
      dispatch(addBirthday(name, birthdate, image)),
  };
};

export default connect(null, mapDispathToProps)(AddBirthday);
