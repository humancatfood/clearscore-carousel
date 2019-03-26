import React from 'react';

import { css, cx } from 'emotion';



export const baseStyle = css({
  margin: 5,
  color: '#a9cdd6',
  fontSize: '4rem',
  fontWeight: 'lighter',
});


const SlideNumber = ({ children, className='', ...props }) => (
  <p
    className={cx(baseStyle, className)}
    {...props}
  >
    { children }
  </p>
);

export default SlideNumber;
