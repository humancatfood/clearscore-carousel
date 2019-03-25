import React from 'react';



const Slider = ({ slides, currentSlideNum }) => (
  <div style={{ width: '100%', height: '100%', overflow: 'hidden'}}>
    <div style={{ width: `${slides.length * 100}%`, height: '100%', backgroundColor: 'red', display: 'flex', transform: `translateX(-${100 * currentSlideNum / slides.length}%)`, transition: 'transform 100ms ease-in-out'}}>
      {
        slides.map((slide, index) => (
          <div
            key={index}
            style={{backgroundColor: 'white', flex: 1}}
          >
            {
              index === currentSlideNum ?
                slide.render() :
                null
            }
          </div>
        ))
      }

    </div>
  </div>
);


export default Slider;
