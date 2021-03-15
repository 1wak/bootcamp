import React from "react";
import s from "styled-components";
import { HeroImage } from "../../assets";

const HeroContainer = s.div`
  margin: 0 auto;
  padding: 20px 20px 0 20px;
  align-items: center;
  max-height: 800px;
  background: #EDF8F5;
`;

const ImageStyle = s.img`
  max-height: 700px;
`;

const ButtonStyle = s.button`
  padding: 5px 20px;
  border: none;
  background: #2B3940;
  color: #fff;
  border-radius: 18px;
`;

const Hero = () => {
  return (
    <HeroContainer className="container-fluid row">
      <div className="col-md">
        <h1>Find the perfect job that you deserve.</h1>
        <ButtonStyle type="submit">Get Started</ButtonStyle>
      </div>
      <ImageStyle className="col-md" src={HeroImage} alt="Hero" />
    </HeroContainer>
  );
};

export default Hero;
