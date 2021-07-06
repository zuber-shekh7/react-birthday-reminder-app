import React from "react";
import { Card } from "react-bootstrap";

const FormCard = ({ title, children }) => {
  return (
    <Card>
      <Card.Header className="bg-dark text-light">
        <h1 className="text-center">{title}</h1>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default FormCard;
