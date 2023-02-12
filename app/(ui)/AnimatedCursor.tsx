"use client";

import { useMousePosition } from "@utils/mousePosConfig";
import { motion } from "framer-motion";
import { cva, VariantProps } from 'class-variance-authority';
import { useStore } from '@nanostores/react';
import { isHovering } from '../(store)/global';

const cursorStyles = cva("bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 fixed top-0 left-0 rounded-full mix-blend-difference pointer-events-none", {
  variants: {
    intent: {
      primary: "w-[24px] h-[24px]",
      secondary: "w-[44px] h-[44px]"
    }
  },
  defaultVariants: {
    intent: "primary"
  }
});

const AnimatedCursor = () => {
  const cursorXY = useMousePosition();
  const isHoveringStatus = useStore(isHovering);

  let currX = cursorXY.cursorX;
  let currY = cursorXY.cursorY;
  return (
    <motion.div
      className={cursorStyles()}
      style={{
        translateX: currX,
        translateY: currY,
      }}
      animate={{
        height: isHoveringStatus ? 44 : 24,
        width: isHoveringStatus ? 44 : 24
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      <span className="cursorText">{isHoveringStatus && 'View'}</span>
    </motion.div>
  )
}

export default AnimatedCursor;
