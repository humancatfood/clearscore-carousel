import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import ScoreIndicator from './ScoreIndicator';

import creditReportInfo from './creditReportInfo.json';



const slides = [
  {
    render: () => (
      <div>
        <h1>Score Indicator</h1>
        <div>{creditReportInfo.creditReportInfo.score}</div>
      </div>
    )
  },
  {
    render: () => (
      <div>
        <h1>Long Term Dept</h1>
        <div>{creditReportInfo.creditReportInfo.currentLongTermDebt}</div>
      </div>
    )
  }
];


ReactDOM.render(<ScoreIndicator slides={slides} />, document.getElementById('root'));
