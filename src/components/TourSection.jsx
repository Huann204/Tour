import React, { useEffect, useRef, useState } from "react";
import Tamdao from "../assets/img/tamdao.png";
import { getTours } from "../services/tourService"; // getTours(page, limit)
import Star from "../assets/img/Star.png";
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const TourSection = ({ title, aos, hidden }) => {
  const listRef = useRef(null);
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 8; // số tour / trang

  useEffect(() => {
    getTours(currentPage, limit).then((res) => {
      setTours(res.tours);
      setTotalPages(res.totalPages);
    });
  }, [currentPage]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [currentPage]);
  return (
    <div
      className={`mt-11 ${!hidden ? "px-4 lg:mx-[91px]" : ""}`}
      data-aos={aos}
    >
      <h2 className="text-primary font-bold text-2xl lg:text-4xl text-center mb-6">
        {title}
      </h2>

      {/* grid tour */}
      <div ref={listRef} className="grid grid-cols-2 lg:grid-cols-4 mr-[-16px]">
        {tours?.map((tour, index) => (
          <div
            key={index}
            className="bg-white pb-4 shadow-md rounded-lg mr-4 mb-[10px] cursor-pointer"
          >
            <div className="w-full h-[237px]">
              <img
                className="w-full h-full object-cover rounded-t-lg"
                src={`http://localhost:5000/${tour.image}`}
                alt={tour.title}
              />
            </div>
            <div className="px-4">
              <h3 className="text-[#25282B] font-bold my-3 text-start line-clamp-2 min-h-[3rem]">
                {tour.title}
              </h3>
              <div className="flex flex-col lg:flex-row text-sm lg:text-[15px] lg:gap-3 font-semibold mb-2">
                <span className="text-[#52575C] line-through">
                  {tour.priceOld} đ
                </span>
                <span className="text-[#DA0808]">{tour.priceNew} đ</span>
              </div>
              <div className="text-[#8C8C8C] text-xs text-start mb-4">
                <p>
                  Mã Tour: <span className="font-bold">{tour.code}</span>
                </p>
                <p>
                  Ngày khởi hành:{" "}
                  <span className="font-bold">{tour.departureDate}</span>
                </p>
                <p>
                  Thời gian: <span className="font-bold">{tour.duration}</span>
                </p>
              </div>
              <div className="flex justify-between flex-col lg:flex-row">
                <div className="flex items-center ">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} className="w-4 h-4" src={Star} alt="star" />
                  ))}
                  <span className="text-[#8C8C8C]">(5)</span>
                </div>
                <div className="flex items-center font-bold gap-3 text-[10px]">
                  <p className="text-[#25282B]">Số chỗ còn:</p>
                  <span className="bg-[#DA0808] rounded-md w-8 h-8 text-white flex items-center justify-center">
                    {tour.stock}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* nếu hidden = true => show phân trang */}
      {hidden ? (
        <div className="flex justify-end items-center mt-7">
          <div className="rounded-lg flex items-center text-primary">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="h-10 w-10 border border-primary rounded-s-md flex items-center justify-center disabled:opacity-50"
            >
              <AiOutlineDoubleLeft />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`h-10 w-10 border border-primary flex items-center justify-center ${
                  currentPage === index + 1
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="h-10 w-10 border border-primary rounded-e-md flex items-center justify-center disabled:opacity-50"
            >
              <AiOutlineDoubleRight />
            </button>
          </div>
        </div>
      ) : (
        <>
          <Link to={"/Tour-nuoc-ngoai"}>
            <div className="w-32 cursor-pointer mb-11 h-10 border-2 border-primary text-primary rounded-lg flex items-center justify-center mx-auto mt-6 hover:bg-primary hover:text-white">
              Xem Tất Cả
            </div>
          </Link>
          <div>
            <img className="w-full" src={Tamdao} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default TourSection;
