import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import naomi1 from './images/gallery/naomi_1.jpg'
import naomi2 from './images/gallery/naomi_2.jpg'
import naomi3 from './images/gallery/naomi_3.jpg'
import naomi4 from './images/gallery/naomi_4.jpg'
import naomi5 from './images/gallery/naomi_5.jpg'
import knotty1 from './images/gallery/aknottylane_1.jpg'
import knotty2 from './images/gallery/aknottylane_2.jpg'
import knotty3 from './images/gallery/aknottylane_3.jpg'
import knotty4 from './images/gallery/aknottylane_4.jpg'
import knotty5 from './images/gallery/aknottylane_5.jpg'
import searay1 from './images/gallery/55ftsearay_1.jpg'
import searay2 from './images/gallery/55ftsearay_2.jpg'
import searay3 from './images/gallery/55ftsearay_3.jpg'
import searay4 from './images/gallery/55ftsearay_4.jpg'
import searay5 from './images/gallery/55ftsearay_5.jpg'
import caprice1 from './images/gallery/caprice_1.jpg'
import caprice2 from './images/gallery/caprice_2.jpg'
import caprice3 from './images/gallery/caprice_3.jpg'
import catalina1 from './images/gallery/catalina_1.jpg'
import catalina2 from './images/gallery/catalina_2.jpg'
import catalina3 from './images/gallery/catalina_3.jpg'
import catalina4 from './images/gallery/catalina_4.jpg'



const items = [

   
        {
            src: naomi1,
            altText: '36ft yacht "Naomi"',
            caption: '36ft yacht "Naomi"'
          },
          { 
            src: naomi2,
            altText: '36ft yacht "Naomi"',
            caption: '36ft yacht "Naomi"'
          },
          { 
            src: naomi3,
            altText: '36ft yacht "Naomi"',
            caption: '36ft yacht "Naomi"'
          },
          { 
            src: naomi4,
            altText: 'Slide 3',
            caption: 'Slide 3'
          },
          { 
            src: naomi5,
            altText: 'Slide 3',
            caption: 'Slide 3'
          },
 
    
        {
            src: knotty1,
            altText: '48ft yacht “Knotty Lane”',
            caption: '48ft yacht “Knotty Lane”'
          },
          { 
            src: knotty2,
            altText: '48ft yacht “Knotty Lane”',
            caption: '48ft yacht “Knotty Lane”'
          },
          { 
            src: knotty3,
            altText: '48ft yacht “Knotty Lane”',
            caption: '48ft yacht “Knotty Lane”'
          },
          { 
            src: knotty4,
            altText: 'Slide 3',
            caption: 'Slide 3'
          },
          { 
            src: knotty5,
            altText: 'Slide 3',
            caption: 'Slide 3'
          },
   
    
        {
            id:'Naomi36ft',
            src: searay1,
            altText: '48ft yacht “Knotty Lane”',
            caption: '48ft yacht “Knotty Lane”'
          },
          { 
            id:'imgsKnottyLane48ft',
            src: searay2,
            altText: '48ft yacht “Knotty Lane”',
            caption: '48ft yacht “Knotty Lane”'
          },
          { 
            id:'imgsSeaRay55ft',
            src: searay3,
            altText: '48ft yacht “Knotty Lane”',
            caption: '48ft yacht “Knotty Lane”'
          },
          { 
            id:'imgsCaprice130ft',
            src: searay4,
            altText: 'Slide 3',
            caption: 'Slide 3'
          },
          { 
            id:'imgsCatalina130ft',
            src: searay5,
            altText: 'Slide 3',
            caption: 'Slide 3'
          },
   
  
        {
            id:'Naomi36ft',
            src: caprice1,
            altText: '36ft yacht "Naomi"',
            caption: '36ft yacht "Naomi"'
          },
          { 
            id:'imgsKnottyLane48ft',
            src: caprice2,
            altText: '36ft yacht "Naomi"',
            caption: '36ft yacht "Naomi"'
          },
          { 
            id:'imgsSeaRay55ft',
            src: caprice3,
            altText: '36ft yacht "Naomi"',
            caption: '36ft yacht "Naomi"'
          },
  
        {
            id:'Naomi36ft',
            src: catalina1,
            altText: '36ft yacht "Naomi"',
            caption: '36ft yacht "Naomi"'
          },
          { 
            id:'imgsKnottyLane48ft',
            src: catalina2,
            altText: '36ft yacht "Naomi"',
            caption: '36ft yacht "Naomi"'
          },
          { 
            id:'imgsSeaRay55ft',
            src: catalina3,
            altText: '36ft yacht "Naomi"',
            caption: '36ft yacht "Naomi"'
          },
          { 
            id:'imgsCaprice130ft',
            src: catalina4,
            altText: 'Slide 3',
            caption: 'Slide 3'
          }
    
    ]




const BoatCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((boat) => {
    return (
        <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={boat.src}
              >
                <img src={boat.src} alt={boat.altText} />
                <CarouselCaption captionText={boat.caption} captionHeader={boat.caption} />
              </CarouselItem>
     
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default BoatCarousel;

