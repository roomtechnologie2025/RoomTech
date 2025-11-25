import { useTranslation } from 'react-i18next';
import { Home, DollarSign, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Home,
      title: t('about.feature1.title'),
      description: t('about.feature1.description'),
    },
    {
      icon: DollarSign,
      title: t('about.feature2.title'),
      description: t('about.feature2.description'),
    },
    {
      icon: Users,
      title: t('about.feature3.title'),
      description: t('about.feature3.description'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white leading-tight tracking-tight"
        >
          {t('about.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-center mb-16 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide"
        >
          {t('about.description')}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className="bg-gradient-to-br from-roomtech-yellow to-yellow-400 p-4 rounded-full shadow-lg"
                  >
                    <Icon className="text-roomtech-black" size={32} />
                  </motion.div>
                </div>
                <motion.h3
                  whileHover={{ color: 'var(--color-roomtech-yellow)' }}
                  className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white"
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
