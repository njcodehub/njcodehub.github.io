import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function DemoCarousel() {
  return (
    <Carousel>
      <div>
        <img src="/IMG_1_Carrousel_Drone.webp" alt="Slide 1" />
        <p className="legend">Multitask system : RTOS, Linux software development</p>
      </div>
      <div>
        <img src="/IMG_2_Carrousel_Agro.webp" alt="Slide 3" />
        <p className="legend">Prototype : PCB Design, sensors local or cloud display</p>
      </div>
    </Carousel>
  );
}
