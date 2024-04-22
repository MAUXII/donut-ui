type Props = {
    text?: string;
    icone?: React.ReactNode;
    link: string;
    tool : string;
  };

  import * as React from "react";
  import { motion } from "framer-motion";
import { useState } from "react";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
  
  export const SocialItem = ({text, icone, link, tool }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <motion.li className="item w-auto relative items-center justify-center flex flex-col" variants={item}>
        <a target="blank" rel="noopener noreferrer" href={link} className=" font-normal items-center duration-[150ms] justify-center flex hover:text-gray-800 hover:dark:text-gray-200 " onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
         {text} {icone}
        </a>
        {isHovered && (
        <motion.div
        initial={{ opacity: 0, y: 0, z: 2 }}
          animate={{ opacity: 1, y: 1, z: 2 }}
          exit={{opacity: 0, y: 0, z: 2 }}
          transition={{ duration: 0.3 }}

        >
        <div className="relative w-auto text-center">
            <div className="absolute transform -translate-x-1/2 text-center text-[10px] justify-center items-center self-center px-2   dark:bg-black bg-white text-black dark:text-white rounded transition-all">
                {tool}
            </div>
        </div>
        </motion.div>
      )}
      </motion.li>
    );
  };
  