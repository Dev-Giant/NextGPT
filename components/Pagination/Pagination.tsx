import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

interface customPaginationProps {
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setIsFetch: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomPagination = (props: customPaginationProps) => {
  const isCurrentPageFirst = props.page === 1;
  const isCurrentPageLast = props.page === props.total;

  const changePage = (number: number) => {
    if (props.page === number) return;
    props.setPage(number);
    props.setIsFetch(true);
  };

  const onPageNumberClick = (pageNumber: number) => {
    changePage(pageNumber);
  };

  const onPreviousPageClick = () => {
    changePage(props.page - 1);
  };

  const onNextPageClick = () => {
    changePage(props.page + 1);
  };

  const setLastPageAsCurrent = () => {
    if (props.page > props.total) {
      props.setPage(props.total);
    }
  };

  let isPageNumberOutOfRange: boolean;

  const pageNumbers = [...new Array(props.total)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === props.total;
    const isCurrentPageWithinTwoPageNumbers =
      Math.abs(pageNumber - props.page) <= 2;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <Pagination.Item
          key={pageNumber}
          onClick={() => onPageNumberClick(pageNumber)}
          active={pageNumber === props.page}
        >
          {pageNumber}
        </Pagination.Item>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber} className="muted" />;
    }

    return null;
  });

  useEffect(setLastPageAsCurrent, [props.total]);

  return (
    <>
      <Pagination data-testid="pagination">
        <Pagination.Prev
          onClick={onPreviousPageClick}
          disabled={isCurrentPageFirst}
        />
        {pageNumbers}
        <Pagination.Next
          onClick={onNextPageClick}
          disabled={isCurrentPageLast}
        />
      </Pagination>
    </>
  );
};

export default CustomPagination;
