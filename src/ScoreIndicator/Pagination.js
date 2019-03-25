import React from 'react';
import { css, cx } from 'emotion';



const paginationStyle = css({
  position: 'absolute',
  bottom: '10%',
  left: '20%',
  width: '60%',
  display: 'flex',
  justifyContent: 'center',
});

const paginationTickStyle = css({
  width: 10,
  height: 10,
  borderRadius: '100%',
  margin: '0 5px',
  cursor: 'pointer',
  border: '2px solid white',
  boxSizing: 'border-box',
  '&.active': {
    backgroundColor: 'white',
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
