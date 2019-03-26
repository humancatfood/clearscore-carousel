import React from 'react';
import TestRenderer from 'react-test-renderer';

import Spacer from './Spacer';



describe('Spacer', () => {

  let element;

  it('should render', () => {
    element = TestRenderer.create(<Spacer />);
    expect(element).toMatchSnapshot();
  });

  it('should accept & pass through props', () => {

    element = TestRenderer.create(<Spacer id="abc"/>);
    expect(element.toJSON().props.id).toBe('abc');

    element = TestRenderer.create(<Spacer className="test-class"/>);
    expect(element.toJSON().props.className).toBe('test-class');

    element = TestRenderer.create(<Spacer style={{ backgroundColor: 'blue' }}/>);
    expect(element.toJSON().props.style.backgroundColor).toBe('blue');

  });

});
