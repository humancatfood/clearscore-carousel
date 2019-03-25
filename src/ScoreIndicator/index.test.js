import React from 'react';
import TestRenderer from 'react-test-renderer';

import ScoreIndicator from './index';



describe('ScoreIndicator', () => {

  beforeEach(() => {

  });

  afterEach(() => {

  });

  it('should render', () => {

    const indicator = TestRenderer.create(<ScoreIndicator />);
    expect(indicator).toMatchSnapshot();

  });

});
