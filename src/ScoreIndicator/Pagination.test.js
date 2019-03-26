import React from 'react';
import TestRenderer from 'react-test-renderer';

import Pagination, { paginationStyle, paginationTickStyle } from './Pagination';



describe('Pagination', () => {

  let element;

  it('should render', () => {

    element = TestRenderer.create(<Pagination />);
    expect(element.toJSON()).toMatchSnapshot();
    expect(element.toJSON()).toBeNull();

    element = TestRenderer.create(<Pagination numPages={0} />);
    expect(element.toJSON()).toMatchSnapshot();
    expect(element.toJSON()).toBeNull();

    element = TestRenderer.create(<Pagination numPages={5} />);
    expect(element.toJSON()).toMatchSnapshot();
    expect(element.root.findAllByType('button').length).toBe(5);

  });

  it('should be styled', () => {

    element = TestRenderer.create(<Pagination numPages={5} />);
    expect(element.toJSON().props.className).toBe(paginationStyle);
    element.root.findAllByType('button').forEach(child => {
      expect(child.props.className).toBe(paginationTickStyle);
    });

    [-5, 0, 2, 5, 50, 0.32442].forEach(indexToTest => {

      element.update(<Pagination numPages={5} currentPageIndex={indexToTest} />);
      expect(element.toJSON().props.className).toBe(paginationStyle);
      element.root.findAllByType('button').forEach((child, index) => {
        if (index === indexToTest) {
          expect(child.props.className).toBe(`${paginationTickStyle} active`);
        } else {
          expect(child.props.className).toBe(paginationTickStyle);
        }
      });

    });

  });

  it('should accept clicks', () => {

    const onClick = jest.fn();
    element = TestRenderer.create(<Pagination
      numPages={3}
      currentPageIndex={0}
      setCurrentPageIndex={onClick}
    />);

    const buttons = element.root.findAllByType('button');

    buttons.forEach((button, indexToClick) => {
      button.props.onClick();
      expect(onClick).toHaveBeenCalledWith(indexToClick);
    });

  });

});
