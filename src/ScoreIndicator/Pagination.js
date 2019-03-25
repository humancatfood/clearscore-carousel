import React from 'react';



const Pagination = ({ numPages, currentPage, setCurrentPage }) => (
  <div style={{ backgroundColor: 'blue', display: 'flex', position: 'absolute'}}>
    {
      Array(numPages).fill(undefined).map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrentPage(index)}
          style={{width: 10, height: 10, backgroundColor: index === currentPage ? 'red' : 'white'}}
        ></div>
      ))
    }
  </div>
);

export default Pagination;
