'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { OpacityTransition, Transition } from './ui/transitions';
import { Progress } from '@/components/ui/progress';

interface LoaderProps {
  animateOut: boolean;
  onFinish?: () => void;
  onCounterDone?: () => void;
}

const Loader = ({ animateOut, onFinish, onCounterDone }: LoaderProps) => {
  const [counter, setCounter] = useState(0);
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(count);

          if (onCounterDone) setTimeout(() => onCounterDone(), 0);
          return 100;
        }

        return next;
      });
    }, 25);

    return () => clearInterval(count);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d === 3 ? 1 : d + 1));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const loadingText = useMemo(() => {
    if (counter <= 10) return 'Just a sec — magic’s loading';
    if (counter < 50) return `Making things ready for you${'.'.repeat(dots)}`;
    if (counter <= 95) return `We're almost there${'.'.repeat(dots)}`;
    if (counter > 95) return 'All set!';
  }, [counter, dots]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={animateOut ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (animateOut && onFinish) onFinish();
      }}
      className="fixed top-0 left-0 z-[9999] w-full h-full bg-background"
    >
      <div className="p-4 md:p-10 flex flex-col md:justify-between max-md:gap-8 w-full h-full">
        <Transition transition={{ delay: 0.2 }}>
          <span className="font-semibold text-chart-2">ardhikaputra.</span>
        </Transition>
        <div className="flex flex-col max-md:justify-between max-md:h-full">
          <Transition transition={{ delay: 0.4 }}>
            <div className="text-2xl md:text-4xl w-full md:w-3/5 whitespace-pre-wrap break-all">
              <OpacityTransition>
                {`Welcome to my digital space —\nThis is where curiosity drives creation.`}
              </OpacityTransition>
            </div>
          </Transition>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-end mb-4">
              <span className="text-white/30 md:text-3xl text-xl">
                {loadingText}
              </span>
              <motion.span className="md:text-7xl text-5xl font-semibold md:font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
                {counter}%
              </motion.span>
            </div>
            <div className="w-full">
              <Progress value={counter} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
