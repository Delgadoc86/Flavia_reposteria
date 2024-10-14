import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pastelero from './components/Pastelero';
import Sabores from './components/Sabores';
import Secreto from './components/Secreto';
import Testimonios from './components/Testimonios';
import Contacto from './components/contacto'; // Importa el nuevo componente
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      {/* Envuelve toda la aplicación en un contenedor para establecer la fuente de la tipografía */}
      
      <Header />
      {/* Componente Header para la navegación y logo */}
      
      <Hero />
      {/* Componente Hero para la presentación de la pastelería */}
      
      <Pastelero />
      {/* Componente Pastelero para presentar al chef */}
      
      <Sabores />
      {/* Componente Sabores para mostrar los diferentes sabores de pasteles */}
      
      <Secreto />
      {/* Componente Secreto para compartir un dato interesante o exclusivo */}
      
      <Testimonios />
      {/* Componente Testimonios para mostrar las opiniones de los clientes */}
      <Contacto />
       {/* Añade el componente Contacto aquí */}
      
      <Footer />
      {/* Componente Footer para cerrar la página con información de contacto y redes sociales */}
    </div>
  );
};

export default App;
