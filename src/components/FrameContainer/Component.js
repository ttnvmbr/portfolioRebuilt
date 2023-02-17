import Frame from "../../svg/Frame";
import { motion } from "framer-motion";
function FrameContainer(props) {
  const right = ["0deg", "5deg", "-2.5deg", "5deg"];
  const left = ["0deg", "-5deg", "2.5deg", "-5deg"];

  return (
    <motion.div
      whileHover={{
        rotate: props.left === true ? left : right,
        transition: {
          rotate: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
            ease: "easeInOut",
          },
          type: "spring",
          bounce: 0.6,
        },
      }}
      className="max-w-sm p-8 relative w-full "
    >
      <Frame />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-left">
        <div className="text-6xl p-4">{props.icon}</div>
        <p className=" text-2xl">{props.text1}</p>
        <p className=" text-xl text-baseGreen">{props.text2}</p>
      </div>
    </motion.div>
  );
}

export default FrameContainer;
