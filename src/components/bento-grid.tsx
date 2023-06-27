'use client';

import TiltCard from '@/components/tilt-card';
import { motion, Variants } from 'framer-motion';

const cardVariants: Variants = {
  onscreen: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 23,
      mass: 1,
    },
  },
};

const topLeftVariants: Variants = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
};

const rightVariants: Variants = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
};

const bottomLeft: Variants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
};

const bottom: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
};

export default function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-3 gap-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        staggerChildren: 0.3,
      }}
    >
      <motion.div
        variants={{ ...cardVariants, ...topLeftVariants }}
        className="col-span-2 row-span-2 aspect-video"
      >
        <TiltCard
          title="Habsida"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://habsida.com"
          color={'from-violet-8 to-crimson-9'}
        />
      </motion.div>
      <motion.div
        variants={{ ...cardVariants, ...rightVariants }}
        className="row-span-3"
      >
        <TiltCard
          title="Habsida"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://habsida.com"
          color={'from-violet-8 to-crimson-9'}
        />
      </motion.div>
      <motion.div
        variants={{ ...cardVariants, ...bottomLeft }}
        className="aspect-square"
      >
        <TiltCard
          title="Habsida"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://habsida.com"
          color={'from-violet-8 to-crimson-9'}
        />
      </motion.div>
      <motion.div
        variants={{ ...cardVariants, ...bottom }}
        className="aspect-square"
      >
        <TiltCard
          title="Habsida"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://habsida.com"
          color={'from-violet-8 to-crimson-9'}
        />
      </motion.div>
    </motion.div>
  );
}
