import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <Container>
        <div className="row">
          <div className="col-6 col-md">
            <h3 className="font-weight-bold">Say Hello</h3>
            <ul className="list-unstyled text-small">
              <li>
                <span>
                  Indy Bintaro Office Park, Building F Jl. Boulevard Bintaro
                  Jaya Blok B7/A6, Tangerang Selatan 15224
                </span>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h3 className="font-weight-bold">Start a Project</h3>
            <ul className="list-unstyled text-small">
              <li>
                <span>
                  We are ready for the challenge{" "}
                  <a href="mailto:hello@xapiens.id">hello@xapiens.id</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h3 className="font-weight-bold">Jobs</h3>
            <ul className="list-unstyled text-small">
              <li>
                <span>
                  We are always looking for talent{" "}
                  <a href="mailto:talent@xapiens.id">talent@xapiens.id</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 col-md text-center">
          <img
            className="mb-2"
            src="https://xapiens.id/wp-content/uploads/2019/06/xti_white.png"
            alt=""
            width="100"
            height="55"
          />
          <small className="d-block mb-3 text-muted">
            &copy; 2021 by Andang Vijayanto Utomo
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
