import React, { useState } from 'react';
import { css } from 'emotion';

import Pagination from './Pagination';
import Slider from './Slider';



const indicatorStyle = css({
  width: 300,
  height: 300,
  borderRadius: 300,
  maxWidth: '90%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'relative',
});

const ScoreIndicator = ({ slides }) => {

  const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);

  console.log('ScoreIndicator:');
  console.log('slides:', slides);
  console.log('slideNum:', currentSlideIndex);

  return (
    <div className={indicatorStyle}>
      <Slider
        slides={slides}
        currentSlideIndex={currentSlideIndex}
      />
      <Pagination
        numPages={slides.length}
        currentPageIndex={currentSlideIndex}
        setCurrentPageIndex={setCurrentSlideIndex}
      />
    </div>
  );
};

export default ScoreIndicator;
