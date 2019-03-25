import React from 'react';
import { css, cx } from 'emotion';



const style = css({
  margin: 4,
  color: 'white',
});

const styleHighlight = css({
  color: '#a9cdd6',
});

const SlideText = ({ highlight=false, ...props }) => (
  <p
    className={cx(
      style,
      {
        [styleHighlight]: highlight,
      },
    )}
    {...props}
  />
);

export default SlideText;
