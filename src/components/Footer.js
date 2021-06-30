import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-4 bg-dark text-light">
      <Container>
        <Row>
          <Col className="mx-auto py-4" md={8}>
            <h4 className="text-center">&copy; Copyright @ Zuber Shekh</h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
