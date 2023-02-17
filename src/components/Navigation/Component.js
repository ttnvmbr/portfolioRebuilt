import { motion } from "framer-motion";

function Navigation() {
  const navItems = ["Home", "About", "Projects", "Contact"];
  return (
    <nav className="z-20 fixed top-1/2 -translate-y-1/2 p-4 hidden lg:block">
      <ul className="flex items-start font-bold text-baseLight text-4xl xl:text-6xl flex-col ">
        {navItems.map((item, i) => {
          return (
            <motion.li
              key={item}
              whileHover={{
                x: "10%",
                transition: { type: "spring", stiffness: 100 },
              }}
              className="group h-12 flex items-center justify-center my-2 xl:my-4"
              initial={{ translateX: "-200%" }}
              animate={{
                translateX: 0,
                transition: {
                  duration: 1 + i * 0.2,
                  ease: "easeInOut",
                },
              }}
              end={{ translateX: 0 }}
            >
              <a
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="group-hover:text-baseMid h-full w-full flex items-center justify-start p-4"
              >
                {item}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navigation;
