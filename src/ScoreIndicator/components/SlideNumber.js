import React from 'react';

import { css } from 'emotion';



const style = css({
  margin: 5,
  color: '#a9cdd6',
  fontSize: '4rem',
  fontWeight: 'lighter',
});


const SlideNumber = ({ children }) => (
  <h1 className={style}>{ children }</h1>
);

export default SlideNumber;
