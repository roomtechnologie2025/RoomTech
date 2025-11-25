import { useTranslation } from 'react-i18next';
import { Sparkles, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const News = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Pour l'instant, pas de nouvelles. Cette section peut être étendue plus tard
  const newsItems = [];

  return (
    <section
      id="news"
      ref={ref}
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-4"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="text-roomtech-yellow mr-3" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            {t('news.title')}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-center mb-12 text-gray-600 dark:text-gray-400"
        >
          {t('news.subtitle')}
        </motion.p>

        {newsItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-roomtech-yellow/10 dark:bg-roomtech-yellow/20 mb-6">
              <Clock className="text-roomtech-yellow" size={48} />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              {t('news.noNews')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
              {t('news.emptyState.description')}
            </p>
            <span className="inline-flex items-center gap-2 bg-roomtech-yellow/10 dark:bg-roomtech-yellow/20 text-roomtech-yellow px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles size={16} />
              {t('news.emptyState.badge')}
            </span>
          </div>
        ) : (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
                <span className="text-sm text-roomtech-yellow font-semibold">
                  {item.date}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default News;
