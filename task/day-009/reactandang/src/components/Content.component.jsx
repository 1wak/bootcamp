import React from "react";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import "../assets/css/Hero.css";

const Content = (props) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="spacer mb-4"
    >
      <Container fluid>{props.children}</Container>
    </motion.main>
  );
};

export default Content;
