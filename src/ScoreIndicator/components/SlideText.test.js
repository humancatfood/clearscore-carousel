import React from 'react';
import TestRenderer from 'react-test-renderer';

import SlideText, { baseStyle, styleHighlight } from './SlideText';



describe('SlideText', () => {

  let element;

  it('should render', () => {
    element = TestRenderer.create(<SlideText />);
    expect(element).toMatchSnapshot();
  });

  it('should be highlightable', () => {

    element = TestRenderer.create(<SlideText />);
    expect(element.toJSON().props.className).toBe(baseStyle);

    element = TestRenderer.create(<SlideText highlight />);
    expect(element.toJSON().props.className).toBe(styleHighlight);

  });

  it('should accept & pass through props', () => {

    element = TestRenderer.create(<SlideText id="blarb"/>);
    expect(element.toJSON().props.id).toBe('blarb');

    element = TestRenderer.create(<SlideText className="test-class"/>);
    expect(element.toJSON().props.className).toBe(`${baseStyle} test-class`);
    element = TestRenderer.create(<SlideText highlight className="test-class"/>);
    expect(element.toJSON().props.className).toBe(`${styleHighlight} test-class`);

    element = TestRenderer.create(<SlideText style={{ backgroundColor: 'blue' }}/>);
    expect(element.toJSON().props.style.backgroundColor).toBe('blue');

  });

});
