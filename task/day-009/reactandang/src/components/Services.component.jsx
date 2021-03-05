import React from "react";
import { Col, Row } from "react-bootstrap";
import "../assets/css/Hero.css";

const Services = () => {
  return (
    <div id="services">
      <span className="subtitle">Focus on your needs</span>
      <h2 className="mt-1 mb-2 font-weight-bold">Services</h2>
      <Row>
        <Col className="col-sm-12 col-md-6">
          <h3 className="font-weight-bold">Web Development</h3>
          <span>
            We have the proven experience to be able to maintain best website
            performance
          </span>
        </Col>
        <Col className="col-sm-12 col-md-6">
          <h3 className="font-weight-bold">App Development</h3>
          <span>
            We have the proven experience to be able to maintain best app
            performance
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
