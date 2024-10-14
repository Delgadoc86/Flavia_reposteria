import React, { useEffect, useState, useRef } from 'react';
import mariaImg from '../assets/Maria.jpg';
import juanImg from '../assets/Juan.jpg';
import lauraImg from '../assets/Laura.jpg';
import carlosImg from '../assets/Carlos.jpg';
import sofiaImg from '../assets/Sofia.jpg';

// Asegúrate de usar las variables de las imágenes importadas
const testimonios = [
  {
    id: 1,
    nombre: 'María López',
    comentario: 'Los pasteles de esta pastelería son los mejores que he probado. ¡El de chocolate es increíble!',
    imagen: mariaImg, // Aquí se usa la variable
  },
  {
    id: 2,
    nombre: 'Juan Pérez',
    comentario: 'Siempre que tengo un evento, confío en ellos. El servicio es excepcional y los sabores son irresistibles.',
    imagen: juanImg, // Aquí se usa la variable
  },
  {
    id: 3,
    nombre: 'Laura Martínez',
    comentario: 'No puedo resistirme a su pastel de fresa. ¡Simplemente delicioso y hermoso!',
    imagen: lauraImg, // Aquí se usa la variable
  },
  {
    id: 4,
    nombre: 'Carlos Gómez',
    comentario: 'Recomiendo esta pastelería a todos mis amigos. ¡Nunca me han decepcionado!',
    imagen: carlosImg, // Aquí se usa la variable
  },
  {
    id: 5,
    nombre: 'Sofía Rojas',
    comentario: 'Cada bocado es pura felicidad. ¡No puedo esperar para volver a probarlo!',
    imagen: sofiaImg, // Aquí se usa la variable
  },
];

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    testimonialsRef.current.startX = touch.clientX;
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const distance = touch.clientX - testimonialsRef.current.startX;

    if (distance > 50) {
      // Deslizar hacia la derecha
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonios.length) % testimonios.length);
      testimonialsRef.current.startX = null; // Reiniciar
    } else if (distance < -50) {
      // Deslizar hacia la izquierda
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
      testimonialsRef.current.startX = null; // Reiniciar
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Lo Que Dicen Nuestros Clientes</h2>

        <div className="overflow-hidden">
          <div
            ref={testimonialsRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Desplazamiento completo para 1 tarjeta
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {testimonios.map((testimonio) => (
              <div
                key={testimonio.id}
                className="flex-shrink-0 w-full md:w-2/4 min-w-full px-5" // Usar min-w-full para móviles
              >
                <div className="bg-gray-300 p-6 rounded-lg shadow-xl flex flex-col items-center h-64"> {/* Altura fija para las tarjetas */}
                  <img
                    src={testimonio.imagen} // Aquí se utiliza la variable correctamente
                    alt={`Imagen de ${testimonio.nombre}`}
                    className="w-25 h-24 rounded-full mx-auto mb-4"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold mb-2">{testimonio.nombre}</h3>
                  <p className="text-gray-700 italic text-center">"{testimonio.comentario}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
