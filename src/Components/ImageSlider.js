import './ImageSlider.css';
import { useState } from 'react';
import { SliderData } from './ImgSliderData';

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState(SliderData);

  function prevImage() {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  }
  function nextImage() {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  console.log(images[currentIndex].img);

  return (
    <div className="image-slider">
      <button className="carousel-button prev" onClick={() => prevImage()}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={() => nextImage()}>
        &#10095;
      </button>
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        loading="lazy"
        src={images[currentIndex].img}
        alt="imageskffto"
      />
    </div>
  );
}

export default ImageSlider;
