import React from 'react';
import cocinando from '../assets/cocinando.jpg'; // Cambia el nombre de la imagen según sea necesario


const Pastelero = () => {
  return (
    <section className="py-16 bg-gray-100">
      {/* Sección con un fondo gris claro y padding vertical de 16 (4rem) */}
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Contenedor principal. 
            mx-auto centra el contenido horizontalmente.
            flex flex-col organiza los elementos en columna en pantallas pequeñas, y md:flex-row los organiza en fila en pantallas medianas y grandes.
            items-center centra los elementos verticalmente, y justify-between los separa horizontalmente.
            px-4 añade padding horizontal para mantener el contenido separado de los bordes. */}

        <div className="md:w-1/2">
          {/* Contenedor de texto ocupa el 50% del ancho en pantallas medianas y grandes. */}
          
          <h2 className="text-3xl font-bold mb-4">Nuestro Maestro Pastelero</h2>
          {/* Título de la sección.
              text-3xl ajusta el tamaño del texto y font-bold lo hace en negrita.
              mb-4 añade un margen inferior para separar el título del texto. */}
          
          <p className="text-lg mb-6">
            Con más de 20 años de experiencia en la creación de los más deliciosos pasteles, nuestro chef, Juan Carlos, ha trabajado en algunas de las mejores pastelerías del mundo. Su pasión y dedicación son el secreto de cada bocado.
          </p>
          {/* Párrafo de descripción del pastelero. 
              text-lg ajusta el tamaño del texto a un nivel moderado.
              mb-6 añade un margen inferior para separar el texto del botón o imagen. */}

          <button className="bg-pink-500 hover:bg-pink-700 text-white py-3 px-6 rounded-lg text-lg transition duration-300">
            Conoce más sobre su historia
          </button>
          {/* Botón de llamada a la acción, similar al del Hero para consistencia visual. */}
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* Contenedor de la imagen ocupa el 50% del ancho en pantallas medianas y grandes.
              mt-8 añade un margen superior en pantallas pequeñas, y md:mt-0 lo elimina en pantallas más grandes. */}
          
          <img 
            src={cocinando}

            alt="Imagen del pastelero" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
          {/* Imagen del pastelero. 
              w-full hace que la imagen ocupe el ancho completo del contenedor.
              h-auto ajusta la altura automáticamente para mantener la proporción.
              rounded-lg aplica bordes redondeados, y shadow-lg añade una sombra suave. */}
        </div>
      </div>
    </section>
  );
};

export default Pastelero;
