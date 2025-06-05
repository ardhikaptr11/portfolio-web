'use client';

import { useTheme } from '@/context/theme-context';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative h-6 w-6"
      >
        {theme === 'light' ? (
          <Moon className="absolute h-6 w-6" />
        ) : (
          <Sun className="absolute h-6 w-6" />
        )}
      </motion.div>
    </Button>
  );
}
