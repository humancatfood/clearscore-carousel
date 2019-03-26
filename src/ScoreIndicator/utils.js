import { useState, useEffect } from 'react';




export const useRAFTween = (targetValue, speed=0.004) => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value < targetValue) {
      const start = performance.now();
      requestAnimationFrame(() => {
        const delta = performance.now() - start;
        setValue(Math.min(targetValue, value + delta * speed));
      });
    }
  }, [value]);

  return value;

};
