import React from 'react';
import { css, cx } from 'emotion';



export const paginationStyle = css({
  position: 'absolute',
  bottom: '10%',
  left: '20%',
  width: '60%',
  display: 'flex',
  justifyContent: 'center',
});

export const paginationTickStyle = css({
  fontsize: 'inherit',
  width: '0.6em',
  height: '0.6em',
  borderRadius: '100%',
  margin: '0 0.3em',
  padding: 0,
  cursor: 'pointer',
  border: '0.2em solid white',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
  '&.active': {
    backgroundColor: 'white',
  },
});


const Pagination = ({ numPages=0, currentPageIndex, setCurrentPageIndex }) => {
  if (numPages > 1) {
    return (
      <div className={paginationStyle}>
        {
          Array(numPages).fill(undefined).map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => setCurrentPageIndex(index)}
              className={cx(paginationTickStyle, {active: index === currentPageIndex})}
            ></button>
          ))
        }
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
