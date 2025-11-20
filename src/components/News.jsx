import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';

const News = () => {
  const { t } = useTranslation();

  // Pour l'instant, pas de nouvelles. Cette section peut être étendue plus tard
  const newsItems = [];

  return (
    <section
      id="news"
      className="py-20 px-4 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="text-roomtech-yellow mr-3" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {t('news.title')}
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-center mb-12 text-gray-600 dark:text-gray-400">
          {t('news.subtitle')}
        </p>
        
        {newsItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              {t('news.noNews')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default News;

