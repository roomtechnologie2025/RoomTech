import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-to-content">
        {t('accessibility.skipToContent')}
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
