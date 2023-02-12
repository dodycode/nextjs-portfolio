import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const useMousePosition = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (event: MouseEvent) => { 
      cursorX.set(event.clientX - 16)
      cursorY.set(event.clientY - 16)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, []);

  return {
    cursorX: cursorXSpring,
    cursorY: cursorYSpring,
    springConfig
  };
};
