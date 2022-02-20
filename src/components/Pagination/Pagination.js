import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {

  let [width, setWidth] = useState(window.innerWidth)
  console.log(width)
  let updateDimension = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimension)
    return () => window.removeEventListener("resize", updateDimension)
  }, []);

  return (
    <>
      <style jsx>
        {`
        @media (max-width: 768px){
          .next, .prev{
            dispslay: none
          }
        }
      `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel='Next'
        previousLabel='Prev'
        nextClassName='btn next'
        previousClassName='btn prev'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        onPageChange={(data) => {
          setPageNumber(data.selected + 1)
        }}
        pageCount={info?.pages} />
    </>
  )
};
export default Pagination;
