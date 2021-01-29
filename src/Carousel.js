import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import naomi1 from './images/gallery/naomi_1.jpg'
import naomi2 from './images/gallery/naomi_2.jpg'
import naomi3 from './images/gallery/naomi_3.jpg'
import naomi4 from './images/gallery/naomi_4.jpg'
import naomi5 from './images/gallery/naomi_5.jpg'
import sundancer1 from './images/gallery/sundancer_1.jpg'
import sundancer2 from './images/gallery/sundancer_2.jpg'
import sundancer3 from './images/gallery/sundancer_3.jpg'
import sundancer4 from './images/gallery/sundancer_4.jpg'
import knotty1 from './images/gallery/aknottylane_1.jpg'
import knotty2 from './images/gallery/aknottylane_2.jpg'
import knotty3 from './images/gallery/aknottylane_3.jpg'
import knotty4 from './images/gallery/aknottylane_4.jpg'
import knotty5 from './images/gallery/aknottylane_5.jpg'
import searay1 from './images/gallery/55ftsearay_1.jpg'
import searay2 from './images/gallery/55ftsearay_2.jpg'
import searay4 from './images/gallery/55ftsearay_4.jpg'
import searay5 from './images/gallery/55ftsearay_5.jpg'
import stasea1 from './images/gallery/72ftstasea_1.jpg'
import stasea2 from './images/gallery/72ftstasea_2.jpg'
import stasea3 from './images/gallery/72ftstasea_3.jpg'

import lalionea1 from './images/gallery/84ftlalionea_1.jpg'
import lalionea2 from './images/gallery/84ftlalionea_2.jpg'
import lalionea3 from './images/gallery/84ftlalionea_3.jpg'

import perishing1 from './images/gallery/90ftperishing_1.jpg'
import perishing2 from './images/gallery/90ftperishing_2.jpg'
import perishing3 from './images/gallery/90ftperishing_3.jpg'
import perishing4 from './images/gallery/90ftperishing_4.jpg'
// import caprice1 from './images/gallery/caprice_1.jpg'
// import caprice2 from './images/gallery/caprice_2.jpg'
// import caprice3 from './images/gallery/caprice_3.jpg'
// import catalina1 from './images/gallery/catalina_1.jpg'
// import catalina2 from './images/gallery/catalina_2.jpg'
// import catalina3 from './images/gallery/catalina_3.jpg'
// import catalina4 from './images/gallery/catalina_4.jpg'



const items = [

   
        {
            src: naomi1,
            altText: '36ft yacht "Naomi"',
            caption: ''
          },
          { 
            src: naomi2,
            altText: '36ft yacht "Naomi"',
            caption: ''
          },
          { 
            src: naomi3,
            altText: '36ft yacht "Naomi"',
            caption: ''
          },
          { 
            src: naomi4,
            altText: 'Slide 3',
            caption: ''
          },
          { 
            src: naomi5,
            altText: 'Slide 3',
            caption: ''
          },
        

          {
            src: sundancer1,
            altText: '42ft yacht "Side Chick"',
            caption: ''
          },
          { 
            src: sundancer2,
            altText: '42ft yacht "Sundancer"',
            caption: ''
          },
          { 
            src: sundancer3,
            altText: '42ft yacht "Sundancer"',
            caption: ''
          },
          { 
            src: sundancer4,
            altText:'42ft yacht "Sundancer"',
            caption: ''
          },
    
    
        {
            src: knotty1,
            altText: '48ft yacht “Knotty Lane”',
            caption: '“Knotty Lane” -Slide1'
          },
          { 
            src: knotty2,
            altText: '48ft yacht “Knotty Lane”',
            caption: '“Knotty Lane” -Slide2'
          },
          { 
            src: knotty3,
            altText: '48ft yacht “Knotty Lane”',
            caption: '“Knotty Lane” -Slide3'
          },
          { 
            src: knotty4,
            altText: 'Slide 3',
            caption: '“Knotty Lane” -Slide4'
          },
          { 
            src: knotty5,
            altText: 'Slide 3',
            caption: '“Knotty Lane” -Slide5'
          },
   
    
        {
            
            src: searay1,
            altText: '55ft yacht “Sea Ray”',
            caption: '“Sea Ray” -Slide1'
          },
          { 
            
            src: searay2,
            altText: '55ft yacht “Sea Ray”',
            caption:  '“Sea Ray” -Slide2'
          },
          { 
            
            src: searay4,
            altText: '55ft yacht “Sea Ray”',
            caption:  '“Sea Ray” -Slide4'
          },
          { 
            
            src: searay5,
            altText: '55ft yacht “Sea Ray”',
            caption: '“Sea Ray” -Slide5'
          },
         { 
          src: stasea1,
          altText: '55ft yacht “Sea Ray”',
          caption: '“Sea Ray” -Slide1'
        },
        { 
          
          src: stasea2,
          altText: '55ft yacht “Sea Ray”',
          caption:  '“Sea Ray” -Slide2'
        },
        { 
          
          src: stasea3,
          altText: '55ft yacht “Sea Ray”',
          caption:  '“Sea Ray” -Slide4'
        },
       
        {
        src:lalionea1,
        altText: '55ft yacht “Sea Ray”',
        caption: '“Sea Ray” -Slide1'
      },
      { 
        
        src: lalionea2,
        altText: '55ft yacht “Sea Ray”',
        caption:  '“Sea Ray” -Slide2'
      },
      { 
        
        src: lalionea3,
        altText: '55ft yacht “Sea Ray”',
        caption:  '“Sea Ray” -Slide4'
      },
      
   
    {
      src: perishing1,
      altText: '55ft yacht “Sea Ray”',
      caption: '“Sea Ray” -Slide1'
    },
    { 
      
      src: perishing2,
      altText: '55ft yacht “Sea Ray”',
      caption:  '“Sea Ray” -Slide2'
    },
    { 
      
      src: perishing3,
      altText: '55ft yacht “Sea Ray”',
      caption:  '“Sea Ray” -Slide4'
    },
    { 
      
      src: perishing4,
      altText: '55ft yacht “Sea Ray”',
      caption: '“Sea Ray” -Slide5'
    },
  
        // {
            
        //     src: caprice1,
        //     altText: '130ft yacht "Caprice"',
        //     caption: '"Caprice" -Slide1'
        //   },
        //   { 
            
        //     src: caprice2,
        //     altText: '130ft yacht "Caprice"',
        //     caption: '"Caprice" -Slide2'
        //   },
        //   { 
            
        //     src: caprice3,
        //     altText: '130ft yacht "Caprice"',
        //     caption: '"Caprice" -Slide3'
        //   },
  

        // {
           
        //     src: catalina1,
        //     altText: '130ft yacht "Catalina"',
        //     caption: '"Catalina" -Slide1'
        //   },
        //   { 
            
        //     src: catalina2,
        //     altText: '130ft yacht "Catalina"',
        //     caption: '"Catalina" -Slide2'
        //   },
        //   { 
            
        //     src: catalina3,
        //     altText: '130ft yacht "Catalina"',
        //     caption:'"Catalina" -Slide3'
        //   },
        //   { 
            
        //     src: catalina4,
        //     altText: '130ft yacht "Catalina"',
        //     caption: '"Catalina" -Slide4'
        //   }
    
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

