import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { InfinityIcon } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Esperar a que la navegación se complete antes de hacer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: 'Inicio', action: () => navigate('/') },
    { name: 'Servicios', action: () => scrollToSection('services') },
    { name: 'Nosotros', action: () => scrollToSection('about') },
    { name: 'Contacto', action: () => scrollToSection('contact') },
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <InfinityIcon className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">FinanceFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <Link to="/cotizador" className="btn-primary">
              Solicitar Crédito
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/cotizador"
                className="block px-3 py-2 btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Crédito
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;