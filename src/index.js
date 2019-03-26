import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import ScoreIndicator from './ScoreIndicator';
import SlideText from './ScoreIndicator/components/SlideText';
import SlideNumber from './ScoreIndicator/components/SlideNumber';
import Spacer from './ScoreIndicator/components/Spacer';

import creditReportInfo from './creditReportInfo.json';



const {
  creditReportInfo: {
    score,
    maxScoreValue,
    equifaxScoreBandDescription,
    currentLongTermDebt,
    currentLongTermCreditLimit,
    changeInLongTermDebt,
  },
} = creditReportInfo;


const slides = [
  {
    render: () => (
      <>
        <SlideText>Your credit score is</SlideText>
        <SlideNumber>{ score }</SlideNumber>
        <SlideText>out of <b>{ maxScoreValue }</b></SlideText>
        <Spacer />
        <SlideText highlight>{ equifaxScoreBandDescription }</SlideText>
      </>
    ),
  },
  {
    render: () => (
      <>
        <SlideText>Your long term dept total</SlideText>
        <SlideNumber>{ currentLongTermDebt }</SlideNumber>
        <SlideText>Total credit limit { currentLongTermCreditLimit || 0 }</SlideText>
        <Spacer />
        <SlideText>
          {
            changeInLongTermDebt ? `Change from last month ${changeInLongTermDebt}` : 'No change from last month'
          }
        </SlideText>
      </>
    ),
  },
];


ReactDOM.render(<ScoreIndicator slides={slides} />, document.getElementById('root'));
