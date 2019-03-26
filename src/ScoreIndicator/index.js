import React, { useState } from 'react';
import { css } from 'emotion';

import Pagination from './Pagination';
import Slider from './Slider';
import Arc from './Arc';



const indicatorStyle = css({
  width: 300,
  height: 300,
  borderRadius: '100%',
  overflow: 'hidden',
  maxWidth: '90%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'relative',
});

const ScoreIndicator = ({ slides=[] }) => {

  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);
  const currentSlide = slides[currentSlideIndex];

  return (
    <div className={ indicatorStyle }>
      <Arc value={ currentSlide.arcValue || 0 } />
      <Slider
        slides={ slides }
        currentSlideIndex={ currentSlideIndex }
      />
      <Pagination
        numPages={ slides.length }
        currentPageIndex={ currentSlideIndex }
        setCurrentPageIndex={ setCurrentSlideIndex }
      />
    </div>
  );
};

export default ScoreIndicator;
