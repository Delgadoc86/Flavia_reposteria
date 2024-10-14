import React from 'react';
import mangas from '../assets/mangas.jpg';
const Secreto = () => {
  return (
    <section className="py-16 bg-pink-500 text-white">
      {/* Sección con fondo rosa y texto blanco, padding vertical de 16 (4rem) */}

      <div className="container mx-auto text-center">
        {/* Contenedor principal centrado con ancho máximo y texto centrado */}
        
        <h2 className="text-4xl font-bold mb-6">El Secreto de Nuestros Pasteles</h2>
        {/* Título de la sección, centrado, con un tamaño de texto grande y margen inferior */}
        
        <p className="text-lg mb-8">
          Nuestra receta secreta ha sido transmitida de generación en generación, garantizando que cada bocado sea una experiencia única. Cada pastel está hecho con amor, y un toque especial que solo nosotros conocemos.
        </p>
        {/* Descripción que añade un toque de misterio y emoción, con tamaño de texto grande y margen inferior */}

        <div className="relative mb-8 flex justify-center">
          {/* Contenedor relativo para posicionar la imagen de manera que sobresalga */}
          
          <img 
            src={mangas} 
            alt="El Secreto" 
            className="w-1200  h-auto rounded-lg shadow-lg transform transition-all duration-100 hover:scale-110"
          />
          {/* Imagen del secreto.
              w-full ocupa todo el ancho, h-auto mantiene la proporción.
              rounded-lg aplica bordes redondeados, shadow-lg añade sombra.
              transform y hover:scale-110 crean un efecto de aumento al pasar el mouse, animación suave. */}
        </div>

        <button className="bg-white text-pink-500 py-3 px-6 rounded-lg text-lg transition duration-300 hover:bg-gray-500">
          Descubre Nuestro Secreto
        </button>
        {/* Botón de llamada a la acción, con un esquema de colores inverso (fondo blanco y texto rosa) para resaltar */}
      </div>
    </section>
  );
};

export default Secreto;
