import React, { useEffect, useState } from 'react';

import { css } from 'emotion';

import { fetchReportInfo } from './../data';
import ScoreIndicator from './index';



const style = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const ExampleScoreIndicator = () => {

  const [ data, setData ] = useState(null);
  useEffect(() => {
    fetchReportInfo().then(setData);
  }, []);

  return (
    <div className={style}>
      {
        data ?
          <ScoreIndicator data={data} /> :
          <b>loading..</b>
      }
    </div>
  );

}

export default ExampleScoreIndicator;
