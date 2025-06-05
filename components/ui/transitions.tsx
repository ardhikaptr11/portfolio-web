'use client';

import { HTMLMotionProps, motion } from 'framer-motion';

interface TransitionProps extends HTMLMotionProps<'div'> {}
export const Transition = ({
  initial,
  whileInView,
  transition,
  ...rest
}: TransitionProps) => {
  const init = initial ? initial : { opacity: 0 };
  const inView = whileInView ? whileInView : { opacity: 1 };
  const trans = transition ? transition : { duration: 0.8, delay: 0.4 };

  return (
    <motion.div
      initial={init}
      whileInView={inView}
      transition={trans}
      {...rest}
    />
  );
};

export const OpacityTransition = ({ children }: { children: string }) => {
  const lines = children.split('\n');

  return (
    <div className="overflow-hidden">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex}>
          {line.split('').map((char, i) => (
            <motion.span
              initial={{ opacity: 0.1 }}
              animate={{ opacity: 1 }}
              layout
              transition={{ delay: (i + lineIndex * line.length) * 0.03, ease: [0.215, 0.61, 0.355, 1] }}
              exit={{
                y: 0,
                transition: { delay: (i + lineIndex * line.length) * 0.02, ease: [0.215, 0.61, 0.355, 1] },
              }}
              key={i}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
};
