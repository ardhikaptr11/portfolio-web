'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { ABOUT_ME } from '@/lib/data';
import { Lanyard } from '@/components/ui/lanyard';
import { Particles } from '@/components/ui/particles';

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        `${ABOUT_ME.name}`,
        'Full Stack Developer',
        'Front End Developer',
        'Back End Developer',
        'Python Developer',
      ],
      typeSpeed: 200,
      startDelay: 75,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = async () => {
    const response = await fetch('/assets/CV-Ardhika.pdf');

    if (!response.ok) {
      console.error('File tidak ditemukan');
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV-Ardhika.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 1,
        }}
      >
        <Particles
          particleColors={['#32b489', '#32b489']}
          particleCount={500}
          particleSpread={20}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="absolute inset-0 z-0">
        <div className="absolute -inset-[10px] backdrop-blur-3xl" />
        <div className="absolute -inset-[10px] bg-background/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container max-w-4xl mx-auto text-center md:text-start relative z-10"
      >
        <motion.div
          initial={{ y: 100, scale: 1.3, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex justify-center mb-4 md:hidden"
        >
          <img
            src="/assets/picofme.png"
            alt="Picture of me"
            className="rounded-full size-[150px]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2 dark:from-primary dark:to-chart-2"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span ref={el} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8"
        >
          {ABOUT_ME.tagline}
        </motion.p>

        <motion.div
          id="cv"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="rounded-full px-8 group gap-2"
            onClick={downloadResume}
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down-to-line"
            >
              <motion.path
                d="M12 17V3"
                initial={{ y: -2 }}
                animate={{ y: [-2, 0, -2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.path
                d="m6 11 6 6 6-6"
                initial={{ y: -2 }}
                animate={{ y: [-2, 0, -2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <path d="M19 21H5" />
            </svg>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center z-99"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <ArrowDown
            className="h-6 w-6 text-muted-foreground cursor-pointer"
            onClick={() => scrollToSection('#about')}
          />
        </motion.div>
      </motion.div>
      <div className="hidden md:block absolute top-0 right-25 z-9">
        <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} fov={25} />
      </div>
    </section>
  );
}
