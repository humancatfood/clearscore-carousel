import { useState, useEffect } from 'react';



const raf = window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            (cb => window.setTimeout(cb, 1000/60));


export const useRAFTween = (targetValue, speed=0.004) => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value < targetValue) {
      const start = performance.now();
      raf(() => {
        const delta = performance.now() - start;
        setValue(Math.min(targetValue, value + delta * speed));
      });
    }
  }, [value]);

  return value;

};
