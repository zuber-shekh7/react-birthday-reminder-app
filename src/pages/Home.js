import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={8}>
          <h1 className="text-center">Welcome to Birthday Reminder App </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
