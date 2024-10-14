import React from 'react';
import chocolateImage from '../assets/chocolate.jpg';
import vainillaImage from '../assets/vainilla.jpg';
import fresaImage from '../assets/frambuesa.jpg'; // Asegúrate de que la imagen exista
import limonImage from '../assets/limon.jpg';

const Sabores = () => {
  // Array de sabores de pasteles
  const sabores = [
    {
      id: 1,
      nombre: 'Chocolate Clásico',
      descripcion: 'Delicioso pastel de chocolate con cobertura de ganache.',
      imagen: chocolateImage, // Cambiar a la variable
    },
    {
      id: 2,
      nombre: 'Vainilla Esponjosa',
      descripcion: 'Suave pastel de vainilla con un toque de crema batida.',
      imagen: vainillaImage, // Cambiar a la variable
    },
    {
      id: 3,
      nombre: 'Fresa Fresca',
      descripcion: 'Pastel de fresa con trozos de fruta y crema.', // Cambiar la descripción si es necesario
      imagen: fresaImage, // Cambiar a la variable
    },
    {
      id: 4,
      nombre: 'Limón Refrescante',
      descripcion: 'Pastel de limón con glaseado dulce y ácido.',
      imagen: limonImage, // Cambiar a la variable
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Sabores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sabores.map((sabor) => (
            <div
              key={sabor.id}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={sabor.imagen}
                alt={sabor.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{sabor.nombre}</h3>
                <p className="text-gray-700">{sabor.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sabores;
