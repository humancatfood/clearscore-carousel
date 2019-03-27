import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Pagination from './Pagination';
import Slider from './Slider';
import Arc from './Arc';



const indicatorStyle = css({
  width: 180,
  height: 180,
  fontSize: 10,
  borderRadius: '100%',
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'relative',
  '@media (min-width: 380px)': {
    width: 240,
    height: 240,
    fontSize: 14,
  },
  '@media (min-width: 520px)': {
    width: 320,
    height: 320,
    fontSize: 18,
  },
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

ScoreIndicator.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    render: PropTypes.func.isRequired,
    arcValue: PropTypes.number,
  })).isRequired,
};

export default ScoreIndicator;
