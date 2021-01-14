import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import Pagination from './Pagination';
import Slider from './Slider';
import Arc from './Arc';



const indicatorStyle = css({
  width: '20em',
  height: '20em',
  position: 'relative',
  overflow: 'hidden',

  borderRadius: '100%',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  '@supports(backdrop-filter: blur())': {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  border: '1px solid rgba(255, 255, 255, 0.5)',
  boxShadow: '1px 1px 10px rgba(0, 0, 0, 0.8)',

  fontSize: 8,
  '@media (min-width: 240px)': {
    fontSize: 10,
  },
  '@media (min-width: 320px)': {
    fontSize: 14,
  },
  '@media (min-width: 520px)': {
    fontSize: 18,
  },
  transition: 'font-size 120ms ease-in-out',
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
