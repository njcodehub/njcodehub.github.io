import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function DemoCarousel() {
  return (
    <Carousel>
      <div>
        <img src="/drone.svg" alt="Slide 1" />
        <p className="legend">Multitask system : RTOS, Linux software development</p>
      </div>
      <div>
        <img src="/hero_page.svg" alt="Slide 3" />
        <p className="legend">Prototype : PCB Design, sensors local or cloud display</p>
      </div>
    </Carousel>
  );
}
