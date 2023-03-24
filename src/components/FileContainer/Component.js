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
      className="w-full p-12 flex justify-center"
    >
      {props.left ? (
        <div className="relative w-56 h-44 -translate-x-8">
          <div className="left-4 w-8 h-5 bg-baseLight absolute top-0"></div>
          <div className="w-32 h-40 bg-baseLight absolute bottom-0 left-0"></div>
          <div className="w-56 bg-baseDark h-36 absolute left-16 -rotate-12 bottom-20 flex justify-center">
            <p className="text-md lg:text-lg p-2 font-lgc">
              Creative media & game technolgies student
            </p>
          </div>
          <div className="w-56 h-36 bg-baseLight absolute -bottom-1 left-6 skew-x-[-20deg] border-4 border-baseBlack flex justify-center items-center flex-col">
            <p className="text-baseBlack text-2xl lg:text-3xl px-4 text-left">
              Rotterdam University
            </p>
            <p className="text-baseBlack text-2xl lg:text-3xl px-4 text-left">
              of Applied Sciences
            </p>
          </div>
        </div>
      ) : (
        <div className="relative w-56 h-44 translate-x-8">
          <div className="right-4 w-8 h-5 bg-baseLight absolute top-0"></div>
          <div className="w-32 h-40 bg-baseLight absolute bottom-0 right-0"></div>
          <div className="w-56 bg-baseMid h-36 absolute right-16 rotate-12 bottom-20 flex justify-center">
            <p className="text-md lg:text-lg  p-4 font-lgc">
              Web, mobile, games & artificial intelligence
            </p>
          </div>
          <div className="w-56 h-36 bg-baseLight absolute -bottom-1 right-6 skew-x-[20deg] border-4 border-baseBlack flex justify-center items-center flex-col">
            <p className="text-baseBlack text-2xl lg:text-3xl px-4 text-left">
              Agile development
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default FileContainer;
