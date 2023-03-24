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
      className="w-full px-8 pb-8 flex justify-center"
    >
      <div className="relative w-full h-72 flex justify-center items-end">
        <div className="w-1/2 h-40 bg-baseLight absolute bottom-0 left-0"></div>
        <div className="w-11/12 bg-baseGreenDark absolute left-6 bottom-36 flex justify-center items-center">
          <p className="text-md lg:text-lg p-2 font-lgc">
            My education has enabled me to learn various programming languages
            and frameworks in a relatively short time. It has also thaught me
            the methodes, tools and ethical mindedness of a user-centered
            designer, which I incorporate into my projects.
          </p>
        </div>
        <div className="w-11/12 h-28 bg-baseGreenDark absolute left-6 bottom-8"></div>
        <div className="w-11/12 h-36 bg-baseLight -bottom-1 left-6 skew-x-[-20deg] border-4 border-baseBlack flex justify-center items-center flex-col">
          <div className="flex flex-wrap justify-center">
            <p className="text-baseBlack text-2xl lg:text-3xl text-left p-1">
              “Create technology
            </p>
            <p className="text-baseBlack text-2xl lg:text-3xl  text-left p-1">
              along with
            </p>
            <p className="text-baseBlack text-2xl lg:text-3xl  text-center p-1">
              empathy, creativity & ethical responsibility”
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default IntroductionFileContainer;
