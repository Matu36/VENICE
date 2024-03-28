const newUser = (props) => {
  return `
    <head>
    <title>Bienvenido a VENICE IDUMENTARIA</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.5;
        padding: 4rem;
        box-sizing: border-box;
      }
      img {
        max-width: 40%;
        display: block; 
        margin: 0 auto; 
    }
      h1, h2, h3 {
        font-weight: bold;
      }
      h2 {
        text-align: center;
        font-size: 2.5em; 
        color: #555; 
        margin-bottom: 0.5em;
    }
      p {
        margin-bottom: 1.5em;
      }
      a {
        color: #F77F00;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
      <img src="https://res.cloudinary.com/dmfzplfra/image/upload/v1711588278/VENICE/LOGO_1_k79btn.jpg" alt="venice logo"/>
      <h2>Bienvenido a Venice Indumentaria - La moda sos vos!</h2>
      <p><b>Hola ${props.email},</b></p>
      <p>¡Bienvenido a Venice! Estamos emocionados de tenerte en nuestra comunidad de amantes de las remeras originales. Sabemos que encontrar prendas únicas y de calidad puede ser todo un desafío, especialmente cuando buscas algo que refleje tu estilo personal. Es por eso que creamos Venice, para ofrecerte una amplia selección de remeras originales y de excelente calidad..</p>
      <p>¿Alguna vez has sentido que quieres destacarte con una remera única pero no sabes dónde encontrarla? Venice está aquí para resolver ese problema. Simplemente explora nuestra colección y encontrarás una variedad de remeras originales que se adaptan a tu estilo y personalidad.</p>
      <p>Además, nos aseguramos de que nuestras remeras sean de la mejor calidad, para que te sientas cómodo y seguro luciéndolas. Y si estás buscando algo específico, nuestro equipo está aquí para ayudarte a encontrar la remera perfecta para ti.</p>
      <p>Queremos que disfrutes vistiendo remeras originales, por eso hemos hecho Venice lo más fácil posible para ti. Además, estamos constantemente agregando nuevas colecciones y diseños para mantenerte actualizado con las últimas tendencias en moda.</p>
      <p>¿Estás listo para explorar nuestra colección?  ¡Visita nuestro sitio web <a href="https://venice-nine.vercel.app/">Ingresar</a> y encuentra la remera original perfecta para ti hoy mismo!</p>
      <p>Saludos cordiales,</p>
      <p>Experiencia VENICE</p>
      <p>P.D. No te pierdas nuestras novedades y promociones especiales. ¡Síguenos en nuestras redes sociales para estar al tanto de todo lo que tenemos para ofrecerte!</p>
    </body>
  </html>`;
};

module.exports = newUser;
