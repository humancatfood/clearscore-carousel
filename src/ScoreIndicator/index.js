import React from 'react';

import { css } from 'emotion';



const ScoreIndicator = () => (
  <h1>
    ScoreIndicator
  </h1>
);



export default ScoreIndicator;


/* Example */

const style = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExampleScoreIndicator = () => {

  return (
    <div className={style}>
      <ScoreIndicator />
    </div>
  );

}
