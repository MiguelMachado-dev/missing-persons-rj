import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageButton from "./PageButton";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  let startPage = Math.max(0, currentPage - 2);
  let endPage = Math.min(totalPages - 1, currentPage + 2);

  // On mobile, show fewer page buttons
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const maxVisiblePages = isMobile ? 3 : 5;

  if (
    endPage - startPage < maxVisiblePages - 1 &&
    totalPages > maxVisiblePages
  ) {
    if (startPage === 0) {
      endPage = Math.min(totalPages - 1, maxVisiblePages - 1);
    } else if (endPage === totalPages - 1) {
      startPage = Math.max(0, totalPages - maxVisiblePages);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center overflow-x-auto py-2 px-1 w-full max-w-full">
      <div className="flex space-x-1 sm:space-x-2">
        <PageButton
          onClick={() => {
            setCurrentPage(0);
          }}
          disabled={currentPage === 0}
          className={`hidden sm:flex ${
            currentPage === 0
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <ChevronLeft size={14} className="mr-1" />
          <ChevronLeft size={14} className="-ml-3" />
        </PageButton>
        <PageButton
          onClick={() => {
            setCurrentPage(Math.max(currentPage - 1, 0));
          }}
          disabled={currentPage === 0}
          className={
            currentPage === 0
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }
        >
          <ChevronLeft size={16} />
        </PageButton>
        {pageNumbers.map((page) => (
          <PageButton
            key={page}
            onClick={() => {
              setCurrentPage(page);
            }}
            disabled={page === currentPage}
            className={
              page === currentPage
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }
          >
            <span
              className={
                page === currentPage
                  ? "font-bold bg-blue-600 text-white w-full h-full flex items-center justify-center rounded-lg"
                  : ""
              }
            >
              {page + 1}
            </span>
          </PageButton>
        ))}
        <PageButton
          onClick={() => {
            setCurrentPage(Math.min(currentPage + 1, totalPages - 1));
          }}
          disabled={currentPage === totalPages - 1 || totalPages === 0}
          className={
            currentPage === totalPages - 1 || totalPages === 0
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }
        >
          <ChevronRight size={16} />
        </PageButton>
        <PageButton
          onClick={() => {
            setCurrentPage(totalPages - 1);
          }}
          disabled={currentPage === totalPages - 1 || totalPages === 0}
          className={`hidden sm:flex ${
            currentPage === totalPages - 1 || totalPages === 0
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <ChevronRight size={14} className="mr-1" />
          <ChevronRight size={14} className="-ml-3" />
        </PageButton>
      </div>
    </div>
  );
};

export default PaginationControls;
