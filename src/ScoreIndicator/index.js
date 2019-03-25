import React, { useState } from 'react';
import { css } from 'emotion';

import Pagination from './Pagination';
import Slider from './Slider';



const style = css({
  width: 300,
  height: 300,
  maxWidth: '90%',
  backgroundColor: 'grey',
  position: 'relative',
});

const ScoreIndicator = ({ slides }) => {

  const [ slideNum, setSlideNum ] = useState(0);

  console.log('ScoreIndicator:');
  console.log('slides:', slides);
  console.log('slideNum:', slideNum);

  return (
    <div className={style}>
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
