import { useTranslation } from 'react-i18next';
import { BookOpen, ArrowRight, FileText } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Blog = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Pour l'instant, pas d'articles. Cette section peut être étendue plus tard
  const blogPosts = [];

  return (
    <section
      id="blog"
      ref={ref}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
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
            <BookOpen className="text-roomtech-yellow mr-3" size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            {t('blog.title')}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-center mb-12 text-gray-600 dark:text-gray-400"
        >
          {t('blog.subtitle')}
        </motion.p>

        {blogPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-roomtech-yellow/10 dark:bg-roomtech-yellow/20 mb-6">
              <FileText className="text-roomtech-yellow" size={48} />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              {t('blog.noPosts')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
              {t('blog.emptyState.description')}
            </p>
            <span className="inline-flex items-center gap-2 bg-roomtech-yellow/10 dark:bg-roomtech-yellow/20 text-roomtech-yellow px-4 py-2 rounded-full text-sm font-semibold">
              <BookOpen size={16} />
              {t('blog.emptyState.badge')}
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
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl"
              >
                <div className="mb-4">
                  <span className="text-sm text-roomtech-yellow font-semibold">
                    {post.date}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <button className="flex items-center text-roomtech-yellow hover:text-yellow-500 font-semibold transition-colors">
                  {t('blog.readMore')}
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;
