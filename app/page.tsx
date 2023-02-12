"use client";

import Container from '@components/Container';
import { toggleHoverBrand, toggleHoverText } from './(store)/global';
import { motion } from 'framer-motion';

export default function Home() {
  const firstText = "Hello I'm Dody,";
  const secondText = "I'm a";
  const thirdText = "Full Stack Developer";
  const fourthText = "from Bali.";

  return (
    <main className="flex items-center justify-center h-screen">
      <Container className="mx-auto px-8 lg:px-0 lg:w-3/4">
        <h1 className="text-gray-900 dark:text-gray-100 text-5xl lg:text-8xl leading-snug lg:leading-tight">
          {firstText.split("").map(char => (
            <>
              <motion.div
              className="inline-block min-w-[10px] lg:min-w-[20px]" 
              onMouseEnter={toggleHoverText} 
              onMouseLeave={toggleHoverText}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}>{char}</motion.div>
            </>
          ))}
          <div
            className="block pr-1 lg:pr-0">
              {secondText.split("").map(char => (
                <>
                  <motion.div 
                  className="inline-block min-w-[10px] lg:min-w-[20px]"
                  onMouseEnter={toggleHoverText} 
                  onMouseLeave={toggleHoverText}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}>{char}</motion.div>
                </>
              ))}
              <span 
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium ml-[10px] lg:ml-[30px]"
                onMouseEnter={toggleHoverBrand}
                onMouseLeave={toggleHoverBrand}>
                {thirdText.split("").map(char => (
                  <>
                    <motion.div
                    className="inline-block min-w-[10px] lg:min-w-[20px]"
                    onMouseEnter={toggleHoverText} 
                    onMouseLeave={toggleHoverText}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}>{char}</motion.div>
                  </>
                ))}
              </span>
          </div>
          {fourthText.split("").map(char => (
            <>
              <motion.div
              className="inline-block min-w-[10px] lg:min-w-[20px]"
              onMouseEnter={toggleHoverText} 
              onMouseLeave={toggleHoverText}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}>{char}</motion.div>
            </>
          ))}
        </h1>
      </Container>
    </main>
  )
}
