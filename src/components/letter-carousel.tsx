import { useReducer } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useInterval from '@/hooks/useInterval';
import { Noto_Sans_KR } from 'next/font/google';
import Logo from '../../public/logo.svg';
import Image from 'next/image';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '300', '900'],
  display: 'swap',
});

const LETTERS = ' 라로이킨 LAROIKIN'.split('');

export default function LetterCarousel() {
  const [currentIndex, next] = useReducer((index) => {
    return index + 1;
  }, 0);

  useInterval(() => {
    next();
  }, 1500);

  return (
    <div className="grid-bg relative flex h-8 w-8 items-center justify-center overflow-hidden rounded border border-mauve-7">
      <AnimatePresence mode="popLayout">
        {LETTERS[currentIndex % LETTERS.length] !== ' ' ? (
          <motion.p
            key={currentIndex}
            className={'font-black ' + notoSansKr.className}
            animate={{ x: 0 }}
            initial={{ x: -50 }}
            exit={{ x: 50 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            {LETTERS[currentIndex % LETTERS.length]}
          </motion.p>
        ) : (
          <motion.div
            key={currentIndex}
            className="flex h-full w-full items-center justify-center invert dark:invert-0"
            animate={{ x: 0 }}
            initial={{ x: -50 }}
            exit={{ x: 50 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <Image src={Logo} alt="logo" width={16} height={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
