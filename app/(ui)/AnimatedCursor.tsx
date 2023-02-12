"use client";

import { useMousePosition } from "@utils/mousePosConfig";
import { motion } from "framer-motion";
import { cva, VariantProps } from 'class-variance-authority';
import { useStore } from '@nanostores/react';
import { isHovering, isHoveringIntoBrand, isHoveringIntoText } from '../(store)/global';

const cursorStyles = cva("fixed top-0 left-0 rounded-full pointer-events-none", {
  variants: {
    intent: {
      primary: "bg-purple-500",
      secondary: "bg-transparent border-purple-500 border-4",
      third: "bg-transparent border-white border-4"
    }
  },
  defaultVariants: {
    intent: "primary"
  }
});

const AnimatedCursor = () => {
  const cursorXY = useMousePosition();
  const isHoveringStatus = useStore(isHovering);
  const isHoveringIntoTextStatus = useStore(isHoveringIntoText);
  const isHoveringIntoBrandStatus = useStore(isHoveringIntoBrand);

  let currX = cursorXY.cursorX;
  let currY = cursorXY.cursorY;
  return (
    <motion.div
      className={(isHoveringStatus && isHoveringIntoTextStatus) ? (isHoveringIntoBrandStatus ? cursorStyles({intent: "third"}) : cursorStyles({intent: "secondary"})) : cursorStyles({intent: "primary"})}
      style={{
        translateX: currX,
        translateY: currY,
      }}
      animate={{
        height: isHoveringStatus ? 78 : 24,
        width: isHoveringStatus ? 78 : 24
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <motion.span 
        className="flex items-center justify-center h-full text-white font-medium uppercase"
        animate={
          isHoveringStatus ? 
          {
            opacity: 1,
            display: "flex"
          } : {
            opacity: 0,
            transitionEnd: {
              display: "none"
            }
          }
        } 
      >
          {(isHoveringStatus && !isHoveringIntoTextStatus) && 'View'}
      </motion.span>
    </motion.div>
  )
}

export default AnimatedCursor;
