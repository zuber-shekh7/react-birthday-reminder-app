import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const BirthdayCard = ({ birthday }) => {
  return (
    <Col className="mt-2" md={4}>
      <Card>
        <Card.Img variant="top" src={birthday.image_url} />
        <Card.Body>
          <Card.Title className="text-center">{birthday.name}</Card.Title>
          <p className="lead text-center">{birthday.birth_date}</p>
          <Button block>Set Reminder</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BirthdayCard;
