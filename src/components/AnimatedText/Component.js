import React from "react";
import { motion } from "framer-motion";

function AnimatedText(props) {
  const splitText = [...props.text];
  return (
    <div className="flex">
      {splitText.map((letter, i) => {
        return (
          <motion.h1
            initial={{ translateX: `-${200 * i}%` }}
            animate={{ translateX: 0, transition: { duration: 2 } }}
            end={{ translateX: 0 }}
            whileHover={{
              y: "20%",
              transition: { type: "spring", stiffness: 100 },
            }}
            className={props.classes}
          >
            {letter}
          </motion.h1>
        );
      })}
    </div>
  );
}

export default AnimatedText;
