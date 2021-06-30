import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const BirthdayCard = ({ birthday }) => {
  return (
    <Col className="mt-2" md={4}>
      <Card>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <Card.Body>
          <Card.Title className="text-center">{birthday.name}</Card.Title>
          <p className="lead text-center">{birthday.birthday}</p>
          <Button block>Set Reminder</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BirthdayCard;
