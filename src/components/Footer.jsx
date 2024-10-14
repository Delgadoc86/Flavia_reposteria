import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-pink-500 text-white">
      {/* Sección del pie de página con fondo rosa y texto blanco, padding vertical de 8 (2rem) */}

      <div className="container mx-auto text-center">
        {/* Contenedor principal centrado con ancho máximo y texto centrado */}

        <h3 className="text-2xl font-bold mb-4">¡Gracias por Visitar!</h3>
        {/* Mensaje de agradecimiento, centrado, con tamaño de texto grande y margen inferior */}

        <p className="mb-8">
          {"Si quieres mantenerte al día con nuestras delicias, síguenos en nuestras redes sociales."}
          {/* Descripción que invita a seguir en redes sociales */}
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {/* Contenedor para los íconos de redes sociales, alineados en el centro con espacio entre ellos */}

          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            {/* Enlace a Instagram */}
            <i className="fab fa-instagram w-8 h-8 transform transition-transform duration-300 hover:scale-125"></i>
            {/* Ícono de Instagram, con efecto de escalado al pasar el mouse */}
          </a>

          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            {/* Enlace a Facebook */}
            <i className="fab fa-facebook w-8 h-8 transform transition-transform duration-300 hover:scale-125"></i>
            {/* Ícono de Facebook, con efecto de escalado al pasar el mouse */}
          </a>

          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            {/* Enlace a Twitter */}
            <i className="fab fa-twitter w-8 h-8 transform transition-transform duration-300 hover:scale-125"></i>
            {/* Ícono de Twitter, con efecto de escalado al pasar el mouse */}
          </a>
        </div>

        <p className="text-sm mb-2">© 2024 Pastelería Deliciosa. Todos los derechos reservados.</p>
        {/* Mensaje de derechos de autor, texto más pequeño con margen inferior */}

        <p className="text-sm italic">"Cada bocado es una experiencia única."</p>
        {/* Frase inspiradora que cierra la sección, en cursiva para darle un toque especial */}
      </div>
    </footer>
  );
};

export default Footer;
