import './Gallery.css';
import ImageSlider from '../Components/ImageSlider';

function Gallery() {
  return (
    <div id="gallery-section">
      <div className="gallery-content">
        <div className="gallery-title">
          <h1>
            LA <span className="highlight">EXPERIENCIA</span> DE UN
            <span className="highlight"> CAFÉ DIFERENTE</span>
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
