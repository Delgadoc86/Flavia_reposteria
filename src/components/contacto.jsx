import React from 'react';

const Contacto = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Contáctanos</h2>
        <p className="mb-12 text-gray-600">
          Estamos aquí para ayudarte. Completa el formulario a continuación y te responderemos lo antes posible.
        </p>

        {/* Formulario de contacto */}
        <form className="bg-white p-8 rounded-lg shadow-lg mb-8 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-left mb-2 text-gray-700" htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-left mb-2 text-gray-700" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-300"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-left mb-2 text-gray-700" htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-300"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Enviar
          </button>
        </form>

        {/* Iframe de Google Maps */}
        <div className="mb-8">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10517.538442000627!2d-68.87377378355269!3d-33.03372295652884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e75a2b0bcf061%3A0x3791cf65b9142170!2sDespensa%20Monaiben!5e0!3m2!1ses-419!2sar!4v1728872331985!5m2!1ses-419!2sarhttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10517.538442000627!2d-68.87377378355269!3d-33.03372295652884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e75a2b0bcf061%3A0x3791cf65b9142170!2sDespensa%20Monaiben!5e0!3m2!1ses-419!2sar!4v1728872331985!5m2!1ses-419!2sar"
            width="90%"
            height="450"
            className="border-0 w-full rounded-lg shadow-xl"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Botón de WhatsApp flotante */}
      <a
        href="https://wa.me/+5492615868669?text=Hola, quiero pedir un presupuesto." // Cambia el número de teléfono por el tuyo
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp fa-2x"></i> {/* Icono de WhatsApp */}
      </a>
    </section>
  );
};

export default Contacto;
