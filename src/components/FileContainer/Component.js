import { motion } from "framer-motion";
import File from "../../svg/File";
import File2 from "../../svg/File2";

function FileContainer(props) {
  const right = ["0deg", "5deg", "-2.5deg", "5deg"];
  const left = ["0deg", "-5deg", "2.5deg", "-5deg"];

  return (
    <motion.div
      whileHover={{
        rotate: props.left == true ? left : right,
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
      className="w-full p-4"
    >
      {props.left == true ? <File /> : <File2 />}
    </motion.div>
  );
}

export default FileContainer;
