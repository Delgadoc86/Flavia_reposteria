import React from 'react';
import heroImage from '../assets/hero-image.jpg';


const Hero = () => {
  return (
    <section  className="relative bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
      {/* Sección con imagen de fondo. 
          bg-cover ajusta la imagen para cubrir toda la pantalla.
          bg-center centra la imagen. h-screen hace que la sección ocupe la altura total de la pantalla */}
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Capa de superposición negra con opacidad para oscurecer la imagen de fondo.
          absolute inset-0 hace que esta capa cubra toda la sección */}
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Este div contiene el contenido principal de la sección Hero.
            z-10 asegura que esté por encima de la capa de oscurecimiento.
            flex flex-col organiza los elementos en una columna, items-center los centra horizontalmente, y justify-center los centra verticalmente. 
            h-full hace que el contenido ocupe toda la altura de la sección.
            text-white aplica el color blanco a todos los textos dentro del contenedor.
            px-4 añade padding horizontal para asegurarnos que en pantallas pequeñas no se pegue a los bordes. */}
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          ¡Bienvenidos a la mejor pastelería!
        </h1>
        {/* Título principal del Hero. 
            text-4xl hace que el tamaño del texto sea grande en móviles y md:text-6xl lo aumenta en pantallas medianas y grandes.
            font-bold aplica negrita, leading-tight ajusta el espacio entre las líneas de texto.
            mb-4 añade un margen inferior para separar el título del subtítulo. */}
        
        <p className="text-lg md:text-2xl mb-8">
          Pasteles únicos y deliciosos, hechos con amor y los mejores ingredientes.
        </p>
        {/* Subtítulo debajo del título. 
            text-lg para un tamaño de texto moderado en móviles y md:text-2xl lo aumenta en pantallas más grandes.
            mb-8 añade un margen inferior para separar el subtítulo del botón. */}
        
        <button className="bg-pink-500 hover:bg-pink-700 text-white py-3 px-6 rounded-lg text-lg transition duration-300">
          Explora nuestros sabores
        </button>
        {/* Botón de llamada a la acción (CTA). 
            bg-pink-500 establece un fondo rosa para el botón, y hover:bg-pink-700 cambia a un tono más oscuro al pasar el mouse.
            text-white hace que el texto sea blanco.
            py-3 px-6 ajusta el padding (vertical y horizontal) del botón, y rounded-lg redondea los bordes.
            text-lg establece un tamaño de texto moderado.
            transition duration-300 aplica una transición suave al cambiar de color. */}
      </div>
    </section>
  );
};

export default Hero;
