import { motion } from "framer-motion";
import FileIntroduction from "../../svg/FileIntroduction";

function IntroductionFileContainer(props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 100 },
      }}
      whileTap={{ scale: 1.05, transition: { type: "spring", stiffness: 100 } }}
      className="w-full px-8 pb-8"
    >
      <FileIntroduction />
    </motion.div>
  );
}

export default IntroductionFileContainer;
