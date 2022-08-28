import './About.css';

function About() {
  return (
    <div id="about-section">
      <div className="about-card">
        <div className="photo-about"></div>
        <div className="text-about">
          <h2>¿Qué es KFFTO?</h2>
          <p>
            <span className="title-color">KFFTO</span> incluye dentro de su
            experiencia de degustación, un ambiente cómodo, decorado con plantas
            comestibles y ornamentales. La naturaleza del especio es social, y
            ha albergado a diversas comunidades y actividades tendientes a
            compartir ideas y conocimiento.
          </p>
          <p>
            <span className="title-color">VISIÓN-KFFTO</span> ser un nuevo
            concepto de cafeterías mexicanas. Conectar distintos tipos de
            asociados dentro de la marca, integrando dentro de los productos
            exhibidos en KFFTO marcas locales mexicanas. Siempre respetando la
            calidad y la tradición de los asociados y ofreciendo a nuestros
            clientes una experiencia única.
          </p>
          <p>
            <span className="title-color">NUESTRA MISIÓN</span> Ofrecer
            experiencias de degustación con bebidas de café, té y diferentes
            infusiones a nuestros clientes. Nuestras instalaciones están
            diseñadas para reunir a comunidades abiertas, siempre respetando
            preferencias sociales, culturales y sexuales. Nuestro espacio está
            diseñado para la convivencia y la integración de distintas
            actividades que promuevan el desarrollo humano.
          </p>
          <span className="end-quote">
            <i>Amor por nuestro país, nuestra cultura y por el café.</i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
