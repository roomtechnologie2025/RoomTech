import { useTranslation } from 'react-i18next';
import { Wrench, Code, Rocket } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

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

  return (
    <section
      id="services"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 animate-fade-in"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          {t('services.title')}
        </h2>
        
        {/* Services actuels */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
            {t('services.current.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-roomtech-yellow"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-roomtech-yellow p-4 rounded-full">
                      <Icon className="text-roomtech-black" size={32} />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {service.description}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold">
                      Disponible
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Services futurs */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200">
            {t('services.future.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-300 dark:border-gray-600 opacity-75"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-300 dark:bg-gray-600 p-4 rounded-full">
                      <Icon className="text-gray-600 dark:text-gray-300" size={32} />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {service.description}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold">
                      Bientôt disponible
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

