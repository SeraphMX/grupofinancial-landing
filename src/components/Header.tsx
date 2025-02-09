import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { InfinityIcon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <InfinityIcon className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">FinanceFlow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Solicitar Crédito
            </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-3 py-2 btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Crédito
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;