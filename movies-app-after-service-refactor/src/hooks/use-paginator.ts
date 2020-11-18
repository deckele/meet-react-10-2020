import { useState } from "react";

const DEFUALT_MIN_PAGE = 1;
export function usePaginator(totalPages: number, minPage = DEFUALT_MIN_PAGE) {
  const [page, setPage] = useState(minPage);

  function handlePrevPage() {
    setPage((currentPage) => {
      const prevPage = currentPage - 1;
      return prevPage < minPage ? minPage : prevPage;
    });
  }
  function handleNextPage() {
    totalPages &&
      setPage((currentPage) => {
        const nextPage = currentPage + 1;
        return nextPage > totalPages ? totalPages : nextPage;
      });
  }
  function handlePageChange(page: number) {
    if (!totalPages) {
      return;
    }
    if (!Number.isInteger(page)) {
      return;
    }
    if (page > totalPages) {
      setPage(totalPages);
      return;
    }
    if (page < minPage) {
      setPage(minPage);
      return;
    }
    setPage(page);
  }
  return {
    nextPage: handleNextPage,
    prevPage: handlePrevPage,
    setPage: handlePageChange,
    page,
  };
}
