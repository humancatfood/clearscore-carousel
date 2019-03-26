import React from 'react';
import { css } from 'emotion';

import { useRAFTween } from './utils';


const arcElementStyle = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const gradientID = Math.random().toString().slice(2);


const Arc = ({ value: targetValue }) => {

  if (!targetValue) {
    return null;
  }

  const value = useRAFTween(targetValue);

  const angle = Math.min(Math.max(value, 0), 0.9999);
  const rad = angle * 2 * Math.PI;
  const x1 = 50 + Math.sin(rad) * 50;
  const y1 = 50 - Math.cos(rad) * 50;
  const largeArc = angle > 0.5 ? 1 : 0;

  const d = `M50 0 A50 50 0 ${largeArc} 1 ${x1} ${y1}`;

  return (
    <svg className={arcElementStyle} viewBox="-2 -2 104 104">

      <defs>
        <linearGradient id={gradientID}>
          <stop offset="0" stopColor="#a9cdd6"/>
          <stop offset="100%" stopColor="#B4EDD2"/>
        </linearGradient>
      </defs>

      <path
        d={d}
        fill="none"
        stroke={`url(#${gradientID})`}
      />

    </svg>
  );
};

export default Arc;
