import React from 'react';
import { css, cx } from 'emotion';





const sliderStyle = css({
  width: '100%',
  height: '100%',
  display: 'flex',
  transition: 'transform 200ms ease-in-out',
});

const slideStyle = css({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 100ms linear',
});

const slideStyleActive = css({
  opacity: 1,
});



const Slider = ({ slides, currentSlideIndex }) => {

  const slideTransformation = css({
    width: `${slides.length * 100}%`,
    transform: `translateX(-${100 * currentSlideIndex / slides.length}%)`,
  });

  return (
    <div className={cx(sliderStyle, slideTransformation)}>
      {
        slides.map((slide, index) => (
          <div key={index} className={cx(slideStyle, {[slideStyleActive]: index === currentSlideIndex})}>
            {
              slide.render()
            }
          </div>
        ))
      }
    </div>
  );
};


export default Slider;
