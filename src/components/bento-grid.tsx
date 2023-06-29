'use client';

import TiltCard from '@/components/tilt-card';
import { motion, Variants } from 'framer-motion';
import NotesThingImg from '../../public/assets/img/NotesThing.jpg';

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
      className="relative grid sm:grid-cols-3 grid-cols-1 gap-4 overflow-hidden rounded-2xl border border-mauve-5 bg-mauve-3 p-4"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        staggerChildren: 0.3,
      }}
    >
      <motion.div
        variants={{ ...cardVariants, ...topLeftVariants }}
        className="z-10 sm:col-span-2 sm:row-span-2 sm:aspect-video aspect-square"
      >
        <TiltCard
          title="NotesThing"
          subtitle="Frontend Developer"
          date="2022 - Now"
          link="https://notesthing.vercel.app"
          imgSrc={NotesThingImg}
        />
      </motion.div>
      <motion.div
        variants={{ ...cardVariants, ...rightVariants }}
        className="z-10 sm:row-span-3 aspect-square sm:aspect-auto"
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
        className="z-10 aspect-square"
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
        className="z-10 aspect-square"
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
