import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import birthdaysAPI from "../apis/birthdaysAPI";
import FormCard from "../components/FormCard";

const AddBirthday = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState(null);
  const history = useHistory();

  const onSubmit = async (e) => {
    try {
      const response = await birthdaysAPI.post("birthdays/new/", {
        name: name,
        birth_date: birthdate,
      });

      if (response.status === 201) {
        history.push("/birthdays");
      }
    } catch (error) {
      alert(JSON.stringify(error.response.data));
    }
  };

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
              <Form.Control
                onChange={(name) => setName(name.target.value)}
                type="text"
                placeholder="Enter name"
              />
              <Form.Text>Enter name of the person</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                onChange={(date) => setBirthdate(date.target.value)}
                type="date"
                placeholder="Enter name"
              />
              <Form.Text>Select birth date of person</Form.Text>
            </Form.Group>
            <Button onClick={onSubmit} block>
              Create
            </Button>
          </FormCard>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBirthday;
