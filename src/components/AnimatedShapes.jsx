'use client';

import { motion } from 'framer-motion';

export function AnimatedShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Circles */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-roomtech-yellow/30 to-yellow-500/20 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400/20 to-roomtech-yellow/30 blur-3xl opacity-80 -translate-y-1/2"
        animate={{
          x: [0, -30, 0],
          y: [0, 15, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-32 right-28 w-28 h-28 border-2 border-roomtech-yellow/40 rotate-45 bg-yellow-50/30 shadow-lg"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-24 right-20 w-20 h-20 border-2 border-yellow-400/50 rounded-full bg-yellow-500/10"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-32 w-12 h-12 rotate-12 bg-gradient-to-br from-yellow-300/40 to-roomtech-yellow/40 opacity-80"
        animate={{
          rotate: [12, 372, 12],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 215, 0, 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 215, 0, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  );
}
