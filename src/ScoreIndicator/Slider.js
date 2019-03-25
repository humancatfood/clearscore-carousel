import React from 'react';
import { css, cx } from 'emotion';



const frameStyle = css({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});


const sliderStyle = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  transition: 'transform 200ms ease-in-out'
});

const slideStyle = css({
  flex: 1
});

const Slider = ({ slides, currentSlideNum }) => {

  const slideTransformation = css({
    width: `${slides.length * 100}%`,
    transform: `translateX(-${100 * currentSlideNum / slides.length}%)`,
  });

  return (
    <div className={frameStyle}>
      <div className={cx(sliderStyle, slideTransformation)}>
        {
          slides.map((slide, index) => (
            <div key={index} className={slideStyle}>
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
};


export default Slider;
