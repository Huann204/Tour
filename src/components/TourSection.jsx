import React, { useEffect, useRef, useState } from "react";
import Tamdao from "../assets/img/tamdao.png";
import { getTours } from "../services/tourService";
import Star from "../assets/img/Star.png";
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Pagination from "./Pagination";

const TourSection = ({ title, aos, hidden }) => {
  const listRef = useRef(null);
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8;

  useEffect(() => {
    getTours(currentPage, limit).then((res) => {
      setTours(res.tours);
      setTotalPages(res.totalPages);
    });
  }, [currentPage]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);

  return (
    <div
      className={`mt-8 sm:mt-11 ${!hidden && "px-4 lg:mx-[91px]"}`}
      data-aos={aos}
    >
      <h2 className="text-primary font-bold text-xl sm:text-2xl lg:text-4xl text-center mb-4 sm:mb-6">
        {title}
      </h2>

      {/* Grid tour với responsive gap */}
      <div
        ref={listRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
      >
        {tours?.map((tour, index) => (
          <Link key={index} to={`/tour/${tour.code}`}>
            <div className="bg-white pb-3 sm:pb-4 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300">
              {/* Image container với aspect ratio phù hợp */}
              <div className="w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]">
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={`http://localhost:5000/${tour.image}`}
                  alt={tour.title}
                  loading="lazy"
                />
              </div>

              <div className="px-3 sm:px-4">
                <h3 className="text-[#25282B] font-bold my-2 sm:my-3 text-sm sm:text-base text-start line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                  {tour.title}
                </h3>

                <div className="flex flex-col sm:flex-row text-sm sm:text-base font-semibold mb-2">
                  <span className="text-[#52575C] line-through">
                    {tour.priceOld} đ
                  </span>
                  <span className="text-[#DA0808] sm:ml-2">
                    {tour.priceNew} đ
                  </span>
                </div>

                <div className="text-[#8C8C8C] text-[10px] sm:text-xs text-start mb-3 sm:mb-4 space-y-1 leading-relaxed">
                  <p>
                    Mã Tour: <span className="font-bold">{tour.code}</span>
                  </p>
                  <p>
                    Ngày khởi hành:{" "}
                    <span className="font-bold">{tour.departureDate}</span>
                  </p>
                  <p>
                    Thời gian:{" "}
                    <span className="font-bold">{tour.duration}</span>
                  </p>
                </div>

                <div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4"
                        src={Star}
                        alt="star"
                      />
                    ))}
                    <span className="text-[#8C8C8C] text-xs ml-1">(5)</span>
                  </div>

                  <div className="flex items-center font-bold gap-2 text-xs">
                    <p className="text-[#25282B]">Số chỗ còn:</p>
                    <span className="bg-[#DA0808] rounded-md w-6 h-6 sm:w-7 sm:h-7 text-white flex items-center justify-center text-xs">
                      {tour.stock}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Conditional rendering for pagination or view all */}
      {hidden ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      ) : (
        <div className="mt-6 sm:mt-8">
          <Link to={"/Tour-nuoc-ngoai"}>
            <div className="w-28 sm:w-32 h-8 sm:h-10 cursor-pointer mb-8 sm:mb-11 border-2 border-primary text-primary rounded-lg flex items-center justify-center mx-auto hover:bg-primary hover:text-white transition-colors text-sm sm:text-base">
              Xem Tất Cả
            </div>
          </Link>
          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-auto"
              src={Tamdao}
              alt="Tam Dao"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TourSection;
