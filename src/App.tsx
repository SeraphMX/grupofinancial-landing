import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CreditCalculator from './components/CreditCalculator';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CreditCalculator />
        <Benefits />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;