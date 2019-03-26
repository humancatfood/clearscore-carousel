import React from 'react';
import TestRenderer from 'react-test-renderer';

import ScoreIndicator from './index';
import Spacer from './components/Spacer';
import SlideText from './components/SlideText';
import SlideNumber from './components/SlideNumber';



const textSlide = {
  render: () => (
    <>
      <SlideText>Blabla</SlideText>
    </>
  ),
};

const numberSlide =  {
  render: () => (
    <>
      <SlideNumber>50</SlideNumber>
    </>
  ),
};
const combinedSlide =  {
  render: () => (
    <>
      <SlideNumber>100</SlideNumber>
      <Spacer />
      <Spacer />
      <SlideNumber>50</SlideNumber>
      <Spacer />
      <SlideText>50</SlideText>
      <Spacer />
    </>
  ),
};

describe('ScoreIndicator', () => {

  it('should render', () => {
    const indicator = TestRenderer.create(<ScoreIndicator
      slides={[
        textSlide,
        numberSlide,
        combinedSlide,
      ]}
    />);
    expect(indicator).toMatchSnapshot();
  });

});
