import React from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div>
      <div className="flex justify-center sm:justify-end items-center mt-6 sm:mt-8">
        <div className="inline-flex items-center rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {/* Previous Button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="relative h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 border-r border-gray-200 group"
            aria-label="Previous page"
          >
            <AiOutlineDoubleLeft className="text-lg sm:text-xl transition-transform group-hover:scale-110" />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center">
            {(() => {
              const delta = 2;
              const range = [];
              const rangeWithDots = [];

              for (
                let i = Math.max(2, currentPage - delta);
                i <= Math.min(totalPages - 1, currentPage + delta);
                i++
              ) {
                range.push(i);
              }

              if (currentPage - delta > 2) {
                rangeWithDots.push(1, "...");
              } else {
                rangeWithDots.push(1);
              }

              rangeWithDots.push(...range);

              if (currentPage + delta < totalPages - 1) {
                rangeWithDots.push("...", totalPages);
              } else {
                rangeWithDots.push(totalPages);
              }

              return rangeWithDots.map((page, index) => {
                if (page === "...") {
                  return (
                    <span
                      key={`ellipsis-${index}`}
                      className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-gray-400 text-sm font-medium"
                    >
                      ⋯
                    </span>
                  );
                }

                const isActive = currentPage === page;
                return (
                  <button
                    key={`page-${page}-${index}`}
                    onClick={() => setCurrentPage(page)}
                    className={`relative h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-sm font-semibold transition-all duration-200 border-r border-gray-200 last:border-r-0 ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-md"
                        : "text-gray-700 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10"
                    }`}
                    aria-label={`Go to page ${page}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {page}
                    {isActive && (
                      <span className="absolute inset-0 rounded-lg border-2 border-primary/30 animate-pulse" />
                    )}
                  </button>
                );
              });
            })()}
          </div>

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="relative h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 border-l border-gray-200 group"
            aria-label="Next page"
          >
            <AiOutlineDoubleRight className="text-lg sm:text-xl transition-transform group-hover:scale-110" />
          </button>
        </div>

        {/* Page Info */}
        <div className="hidden sm:flex items-center ml-4 text-sm text-gray-600">
          <span className="bg-gray-50 px-3 py-2 rounded-lg border">
            Trang {currentPage} / {totalPages}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
