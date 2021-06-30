import React from "react";
import { Card, Form } from "react-bootstrap";

const FormCard = ({ title, children }) => {
  console.log(children);
  return (
    <Card>
      <Card.Header className="bg-dark text-light">
        <h1 className="text-center">{title}</h1>
      </Card.Header>
      <Card.Body>
        <Form>{children}</Form>
      </Card.Body>
    </Card>
  );
};

export default FormCard;
