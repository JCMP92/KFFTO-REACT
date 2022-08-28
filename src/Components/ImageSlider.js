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
      <div
        className="image-displaying"
        style={{
          backgroundImage: `url(${images[currentIndex].img})`,
          height: '100%',
          width: '100%',
        }}
      ></div>
    </div>
  );
}

export default ImageSlider;
