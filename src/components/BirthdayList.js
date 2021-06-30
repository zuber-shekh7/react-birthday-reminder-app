import React from "react";
import { Container, Row } from "react-bootstrap";
import BirthdayCard from "./BirthdayCard";

const BirthdayList = ({ birthdays }) => {
  const renderList = () => {
    return birthdays.map((birthday) => {
      return <BirthdayCard key={birthday.id} birthday={birthday} />;
    });
  };

  return (
    <Container>
      <Row>{renderList()}</Row>
    </Container>
  );
};

export default BirthdayList;
