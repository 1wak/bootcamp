import React from "react";
import { Fragment } from "react";
import { motion } from "framer-motion";
import "../assets/css/Hero.css";

const Hero = () => {
  return (
    <Fragment>
      <section className="row hb">
        <div className="col-md-6">
          <span className="subtitle">Professional Digital Agency</span>
          <h1 className="pr-5 xs mt-2 mb-2 font-weight-bold">
            Promote Your Site to the Top of Search Engines
          </h1>
          <p className="pr-3 xs">
            The best Digital Agency in town. We provide good websites and
            promote website in the top of search engines so that our clients
            recieve even more requests for their services or product.
          </p>
          <motion.button
            style={{
              color: "white",
              background: "orange",
              border: "1px solid orange",
              padding: "8px",
              borderRadius: "8px",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="ml-3"
            style={{
              color: "black",
              padding: "8px",
              border: "1px solid orange",
              borderRadius: "8px",
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            Discuss Project
          </motion.button>
        </div>
        <div className="img-bg col-xs-12 col-md-6 mt-2 mb-1" />
      </section>
    </Fragment>
  );
};

export default Hero;
