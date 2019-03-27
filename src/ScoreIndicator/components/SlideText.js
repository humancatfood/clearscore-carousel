import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';



export const baseStyle = css({
  margin: 4,
  color: 'white',
});

export const styleHighlight = cx(baseStyle, css({
  color: '#a9cdd6',
}));

const SlideText = ({ highlight=false, className='', ...props }) => (
  <p
    className={cx(
      {
        [styleHighlight]: highlight,
        [baseStyle]: !highlight,
      },
      className,
    )}
    {...props}
  />
);

SlideText.propTypes = {
  highlight: PropTypes.bool,
};

export default SlideText;
