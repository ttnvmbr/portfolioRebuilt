import React from "react";
import { motion } from "framer-motion";
import Desk from "../../svg/Desk";
import AnimatedText from "../AnimatedText/Component";
export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 3 },
      }}
      exit={{
        opacity: 0,
        x: 0,
        y: 100,
        transition: { duration: 3 },
      }}
      transition={{ type: "linear" }}
      className="relative w-screen h-screen flex justify-center items-center overflow-hidden"
    >
      <div className="h-[80vh] p-4 flex flex-col lg:flex-row justify-center items-center">
        <div className="relative p-4 lg:order-2 lg:p-8 max-w-xs lg:max-w-2xl w-">
          <AnimatedText
            text="Inci"
            classes="font-parklane text-6xl lg:text-9xl z-10"
          />

          <AnimatedText
            text="Yesiltepe"
            classes="font-parklane text-6xl lg:text-9xl"
          />
          <motion.p
            whileHover={{
              x: "10%",
              transition: { type: "spring", stiffness: 100 },
            }}
            initial={{ translateY: "-200%" }}
            animate={{
              translateY: 0,
              transition: {
                duration: 3,
                ease: "easeInOut",
              },
            }}
            end={{ translateY: 0 }}
            className="text-3xl text-baseGreen absolute font-abc bottom-1/2 right-0 lg:text-6xl"
          >
            Creative developer
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 3 },
          }}
          end={{ opacity: 1 }}
          className="lg:order-1 w-full h-full p-2"
        >
          <Desk />
        </motion.div>
      </div>
    </motion.div>
  );
}
export default Home;
