import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BirthdayList from "../components/BirthdayList";
import { fetchBirthdays } from "../actions/birthdays";

const Birthdays = ({ birthdays, fetchBirthdays }) => {
  useEffect(() => {
    fetchBirthdays();
  }, [fetchBirthdays, birthdays]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center">Birthdays</h1>
          <Container>
            <Link className="btn btn-primary" to="/birthdays/new">
              Add Birthday
            </Link>
          </Container>
          <BirthdayList birthdays={birthdays} />
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBirthdays: () => dispatch(fetchBirthdays()),
  };
};

const mapStateToProps = (state) => {
  return {
    birthdays: state.birthdays,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Birthdays);
