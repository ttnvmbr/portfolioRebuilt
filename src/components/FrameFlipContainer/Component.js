import FrameFlip from "../../svg/FrameFLip";
import { motion } from "framer-motion";
function FrameFlipContainer(props) {
  return (
    <motion.div
      whileHover={{
        rotate: ["0deg", "2.5deg", "-1.25deg", "2.5deg"],
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
      className="max-w-xl w-full relative px-4"
    >
      <FrameFlip />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-left w-[80%] whitespace-pre-wrap">
        <div className="text-5xl">{props.icon}</div>
        <p className=" text-2xl p-5">{props.text}</p>
      </div>
    </motion.div>
  );
}

export default FrameFlipContainer;
