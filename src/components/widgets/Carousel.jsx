import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function DemoCarousel() {
  return (
    <Carousel>
      <div>
        <img src="/drone.svg" alt="Slide 1" />
        <p className="legend">Real time system development. Tech detail : RTOS, sensors integration.</p>
      </div>
      <div>
        <img src="/Medical.svg" alt="Slide 2" />
        <p className="legend">Critical system. Tech detail : coding standard ISO 13485, IEC 62304, FDA.</p>
      </div>
      <div>
        <img src="/hero_page.svg" alt="Slide 3" />
        <p className="legend">Prototype development</p>
      </div>
    </Carousel>
  );
}
