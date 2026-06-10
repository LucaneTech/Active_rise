import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Marketing from './pages/services/Marketing';
import Communication from './pages/services/Communication';
import CreationWeb from './pages/services/CreationWeb';
import PerformanceCommerciale from './pages/services/PerformanceCommerciale';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import ErrorPage from './pages/404';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-beige">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/communication" element={<Communication />} />
          <Route path="/services/creation-web" element={<CreationWeb />} />
          <Route path="/services/performance-commerciale" element={<PerformanceCommerciale />} />
          <Route path="/cases" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
