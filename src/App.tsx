import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CreditoSimple from './pages/CreditoSimple';
import CreditoRevolvente from './pages/CreditoRevolvente';
import Arrendamiento from './pages/Arrendamiento';
import CreditWizard from './pages/CreditWizard';
import CotizadorRevolvente from './pages/CotizadorRevolvente';
import CotizadorArrendamiento from './pages/CotizadorArrendamiento';
import ChatAssistant from './components/ChatAssistant';
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import PageLoader from './components/PageLoader';

function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Products />
      <Testimonials />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/productos/credito-simple" element={<CreditoSimple />} />
              <Route path="/productos/credito-revolvente" element={<CreditoRevolvente />} />
              <Route path="/productos/arrendamiento" element={<Arrendamiento />} />
              <Route path="/cotizador" element={<CreditWizard />} />
              <Route path="/cotizador-revolvente" element={<CotizadorRevolvente />} />
              <Route path="/cotizador-arrendamiento" element={<CotizadorArrendamiento />} />
              <Route path="/nosotros" element={<AboutUs />} />
              <Route path="/privacidad" element={<PrivacyPolicy />} />
              <Route path="/terminos" element={<Terms />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;