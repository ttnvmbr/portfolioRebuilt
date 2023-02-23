import { motion } from "framer-motion";
import File from "../../svg/File";
import File2 from "../../svg/File2";

function FileContainer(props) {
  return (
    <motion.div
      whileHover={{
        rotate: props.left ? -10 : 10,
        transition: { type: "spring", stiffness: 100 },
      }}
      className="w-full p-4"
    >
      {props.left ? <File /> : <File2 />}
    </motion.div>
  );
}

export default FileContainer;
