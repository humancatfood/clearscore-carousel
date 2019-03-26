import React from 'react';

import { css } from 'emotion';



const style = css({
  margin: 5,
  color: '#a9cdd6',
  fontSize: '4rem',
  fontWeight: 'lighter',
});


const SlideNumber = ({ children }) => (
  <p className={style}>{ children }</p>
);

export default SlideNumber;
