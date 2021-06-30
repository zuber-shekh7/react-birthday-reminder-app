import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import BirthdayList from "../components/BirthdayList";

const birthdays = [
  {
    id: 1,
    name: "Rahul Dravid",
    birthday: "2021-01-05",
  },
  {
    id: 2,
    name: "Sachin Tendulkar",
    birthday: "2021-01-05",
  },
  {
    id: 3,
    name: "MS Dhoni",
    birthday: "2021-01-05",
  },
  {
    id: 4,
    name: "Virat Kohli",
    birthday: "2021-01-05",
  },
];

const Birthdays = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center">Birthdays</h1>
          <BirthdayList birthdays={birthdays} />
        </Col>
      </Row>
    </Container>
  );
};

export default Birthdays;
