import React from "react";
import { motion } from "framer-motion";

const InfinityLoader = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        border: "5px solid #E65100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          backgroundColor: "#E65100",
        }}
      />
    </motion.div>
  );
};

export default InfinityLoader;
