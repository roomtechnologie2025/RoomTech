import { useTranslation } from 'react-i18next';
import { Wrench, Code, Rocket, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const currentServices = [
    {
      icon: Wrench,
      title: t('services.current.maintenance.title'),
      description: t('services.current.maintenance.description'),
      status: 'current',
    },
  ];

  const futureServices = [
    {
      icon: Code,
      title: t('services.future.fullstack.title'),
      description: t('services.future.fullstack.description'),
      status: 'future',
    },
    {
      icon: Rocket,
      title: t('services.future.other.title'),
      description: t('services.future.other.description'),
      status: 'future',
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
      id="services"
      ref={ref}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white leading-tight tracking-tight"
        >
          {t('services.title')}
        </motion.h2>

        {/* Services actuels */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200"
          >
            {t('services.current.title')}
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {currentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl border-2 border-roomtech-yellow shadow-md hover:shadow-2xl"
                >
                  <div className="flex justify-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      className="bg-gradient-to-br from-roomtech-yellow to-yellow-400 p-4 rounded-full shadow-lg"
                    >
                      <Icon className="text-roomtech-black" size={32} />
                    </motion.div>
                  </div>
                  <motion.h4
                    whileHover={{ color: 'var(--color-roomtech-yellow)' }}
                    className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white"
                  >
                    {service.title}
                  </motion.h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {service.description}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-semibold border border-green-300 dark:border-green-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      {t('services.status.available')}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Services futurs */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200"
          >
            {t('services.future.title')}
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {futureServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-600 shadow-md hover:shadow-xl opacity-75"
                >
                  <div className="flex justify-center mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-300 dark:bg-gray-600 p-4 rounded-full"
                    >
                      <Icon
                        className="text-gray-600 dark:text-gray-300"
                        size={32}
                      />
                    </motion.div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {service.description}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold border border-blue-300 dark:border-blue-700">
                      <Clock size={14} />
                      {t('services.status.comingSoon')}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
