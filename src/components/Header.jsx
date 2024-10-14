import React, { useState } from 'react';
import logo from '../assets/flavia.png'; // Importa el logo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú móvil

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Alterna el estado del menú
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo de la pastelería */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo de la pastelería" className="h-24 w-auto md:h-28 lg:h-32" />
        </div>

        {/* Menú de navegación */}
        <nav className="hidden md:flex space-x-4">
          <a href="#inicio" className="text-gray-500 hover:text-gray-900 transition duration-300">Inicio</a>
          <a href="#sabores" className="text-gray-500 hover:text-gray-900 transition duration-300">Explorar sabores</a>
          <a href="#secretos" className="text-gray-500 hover:text-gray-900 transition duration-300">Nuestros secretos</a>
          <a href="#testimonios" className="text-gray-500 hover:text-gray-900 transition duration-300">Testimonios</a>
          <a href="#contacto" className="text-gray-500 hover:text-gray-900 transition duration-300">Contacto</a>
        </nav>

        {/* Botón de hacer pedido */}
        <div className="hidden md:block">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition duration-300">
            Hacer un pedido
          </button>
        </div>

        {/* Menú móvil (hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <nav className="flex flex-col space-y-2 p-4 bg-white shadow-md">
          <a href="#inicio" className="text-gray-500 hover:text-gray-900 transition duration-300">Inicio</a>
          <a href="#sabores" className="text-gray-500 hover:text-gray-900 transition duration-300">Explorar sabores</a>
          <a href="#secretos" className="text-gray-500 hover:text-gray-900 transition duration-300">Nuestros secretos</a>
          <a href="#testimonios" className="text-gray-500 hover:text-gray-900 transition duration-300">Testimonios</a>
          <a href="#contacto" className="text-gray-500 hover:text-gray-900 transition duration-300">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
