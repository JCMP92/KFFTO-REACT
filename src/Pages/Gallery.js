import './Gallery.css';
import ImageSlider from '../Components/ImageSlider';

function Gallery() {
  return (
    <div id="gallery-section">
      <div className="gallery-content">
        <div className="gallery-title">
          <h1>
            VIVE <span className="highlight">LA EXPERIENCIA</span> DEL
            <span className="highlight"> CAFÉ</span>
          </h1>
        </div>
        <div className="KFFTO-carousel">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
