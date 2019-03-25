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

  const [ slideNum, setSlideNum ] = useState(0);

  console.log('ScoreIndicator:');
  console.log('slides:', slides);
  console.log('slideNum:', slideNum);

  return (
    <div className={indicatorStyle}>
      <Slider
        slides={slides}
        currentSlideNum={slideNum}
      />
      <Pagination
        numPages={slides.length}
        currentPage={slideNum}
        setCurrentPage={setSlideNum}
      />
    </div>
  );
};

export default ScoreIndicator;
