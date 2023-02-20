import React from "react";
import Pagination from "react-bootstrap/Pagination";

interface customPaginationProps {
  total: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setIsFetch: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomPagination = (props: customPaginationProps) => {
  const previousPageHandle = () => {
    props.setPage((prev) => prev - 1);
    props.setIsFetch(true);
  };

  const nextPageHandle = () => {
    props.setPage((prev) => prev + 1);
    props.setIsFetch(true);
  };

  const selectPageHandle = (item: number) => {
    props.setPage(item);
    props.setIsFetch(true);
  };

  let pageNumbers = [];
  for (let i = 0; i <= props.total; i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination data-testid="pagination">
      <Pagination.Prev
        disabled={props.page === 0}
        onClick={previousPageHandle}
      />
      {pageNumbers.map((item) => (
        <Pagination.Item
          key={item}
          active={item === props.page}
          onClick={() => selectPageHandle(item)}
        >
          {item + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={props.page === props.total}
        onClick={nextPageHandle}
      />
    </Pagination>
  );
};

export default CustomPagination;
