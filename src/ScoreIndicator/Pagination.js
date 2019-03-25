import React from 'react';
import { css, cx } from 'emotion';



const paginationStyle = css({
  position: 'absolute',
  bottom: '25%',
  left: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
});

const paginationTickStyle = css({
  width: 10,
  height: 10,
  borderRadius: '100%',
  backgroundColor: 'white',
  '&.active': {
    backgroundColor: 'red',
  }
});


const Pagination = ({ numPages, currentPage, setCurrentPage }) => (
  <div className={paginationStyle}>
    {
      Array(numPages).fill(undefined).map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrentPage(index)}
          className={cx(paginationTickStyle, {active: index === currentPage})}
        ></div>
      ))
    }
  </div>
);

export default Pagination;
