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


const Pagination = ({ numPages, currentPageIndex, setCurrentPageIndex }) => {
  if (numPages > 1) {
    return (
      <div className={paginationStyle}>
        {
          Array(numPages).fill(undefined).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentPageIndex(index)}
              className={cx(paginationTickStyle, {active: index === currentPageIndex})}
            ></div>
          ))
        }
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
