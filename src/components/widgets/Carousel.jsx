import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function DemoCarousel() {
  return (
    <Carousel>
      <div>
        <img src="/IMG_1_Carrousel_Drone.webp" alt="Slide 1" />
        <p className="legend">Smarter Farming</p>
      </div>
      <div>
        <img src="/Smart_city .jpg" alt="Slide 2" />
        <p className="legend">Smarter Cities</p>
      </div>
      <div>
        <img src="/smart_living.jpg" alt="Slide 3" />
        <p className="legend">Smarter living</p>
      </div>
    </Carousel>
  );
}
