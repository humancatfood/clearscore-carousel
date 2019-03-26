import React from 'react';
import TestRenderer from 'react-test-renderer';

import SlideNumber, { baseStyle } from './SlideNumber';



describe('SlideNumber', () => {

  let element;

  it('should render', () => {
    element = TestRenderer.create(<SlideNumber />);
    expect(element).toMatchSnapshot();
  });

  it('should accept & pass through props', () => {

    element = TestRenderer.create(<SlideNumber id="blarb"/>);
    expect(element.toJSON().props.id).toBe('blarb');

    element = TestRenderer.create(<SlideNumber className="test-class"/>);
    expect(element.toJSON().props.className).toBe(`${baseStyle} test-class`);

    element = TestRenderer.create(<SlideNumber style={{ backgroundColor: 'blue' }}/>);
    expect(element.toJSON().props.style.backgroundColor).toBe('blue');

  });

});
