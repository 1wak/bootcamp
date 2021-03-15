import React from "react";
import s from "styled-components";

const ExploreContainer = s.div`
    background: #2B3940;
    padding: 20px;
    min-height: 300px;
`;

const CardWrapper = s.div`
    gap: 10px;
    justify-content: center;
    margin: 0 auto;
`;

const Card = s.div`
    padding: 10px;
    max-width: 400px;
`;

const Kotak = s.div`
    height: 100px;
    width: 100px;
    color: blue;
`;
const Explore = () => {
  return (
    <ExploreContainer>
      <h3 className="text-white mb-md-3">Explore Internship Category</h3>
      <CardWrapper className="row">
        <Card className="card col-lg-3">
          <Kotak>A</Kotak>
          <h3>Business Development</h3>
          <p>20 Internships</p>
        </Card>
        <Card className="card col-lg-3">
          <h3>Customer Services</h3>
          <p>21 Internships</p>
        </Card>
        <Card className="card col-lg-3">
          <h3>Development</h3>
          <p>20 Internships</p>
        </Card>
        <Card className="card col-lg-3">
          <h3>Design</h3>
          <p>20 Internships</p>
        </Card>
        <Card className="card col-lg-3">
          <h3>Marketing & Management</h3>
          <p>20 Internships</p>
        </Card>
        <Card className="card col-lg-3">
          <h3>Sales & Communication</h3>
          <p>20 Internships</p>
        </Card>
        <Card className="card col-lg-3">
          <h3>Project Management</h3>
          <p>20 Internships</p>
        </Card>
        <Card className="card col-lg-3">
          <h3>Human Resource</h3>
          <p>20 Internships</p>
        </Card>
      </CardWrapper>
    </ExploreContainer>
  );
};

export default Explore;
