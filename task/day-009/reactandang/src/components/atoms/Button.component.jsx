import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
        style={{
          background: "black",
          width: "24",
          height: "24",
        }}
      />
    </div>
  );
};

export default Button;
