import React from "react";
import { HappyPeople } from "../../assets";
import { Blog, Explore, Hero } from "../../components";
import s from "styled-components";

const ImageStyle = s.img`
`;

const BackgroundArt = s.div`
  background: #000;
  padding: 10px;
`;

const Article1 = (
  <BackgroundArt className="row">
    <div className="col-lg-6">
      <ImageStyle src={HappyPeople} alt="Happy intern" />
    </div>
    <div className="col-lg-6">
      <h3>Help you to get experience for your dream jobs.</h3>
      <ul>
        <li>Do it on your free time.</li>
        <li>Get help from another interns.</li>
      </ul>
    </div>
  </BackgroundArt>
);

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Explore />
      {Article1}
      <Blog />
    </div>
  );
};

export default Homepage;
