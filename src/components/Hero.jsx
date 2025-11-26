import { useTranslation } from 'react-i18next';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedShapes } from './AnimatedShapes';

const Hero = () => {
  const { t } = useTranslation();
  const heroTitle = t('hero.title');

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none lg:left-1/2 lg:right-0 lg:inset-y-0">
        <AnimatedShapes />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-roomtech-yellow to-yellow-500 bg-clip-text text-transparent leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-md text-center lg:text-left"
            >
              {heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide text-center lg:text-left"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              aria-label="Go to contact section"
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-roomtech-yellow hover:bg-yellow-500 text-roomtech-black font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl hover:shadow-roomtech-yellow/50 mx-auto lg:mx-0"
            >
              {t('hero.cta')}
            </motion.button>
          </div>

          <div className="hidden lg:block lg:w-1/2" aria-hidden="true" />
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
          aria-hidden="true"
        >
          <ArrowDown className="text-gray-400 dark:text-gray-500" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
