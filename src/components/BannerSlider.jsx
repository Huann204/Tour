import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner1 from "../assets/img/Banner1.png";
import Banner2 from "../assets/img/Banner2.png";
import Banner3 from "../assets/img/Banner3.png";

const Banners = [Banner1, Banner2, Banner3, Banner1, Banner2, Banner3];

const BannerSlider = (prop) => {
  return (
    <div className="bg-white mt-11 px-4 lg:mx-[91px]" {...prop}>
      <div className="grid grid-cols-1">
        <h2 className="font-bold text-2xl text-primary text-center mb-6">
          Khuyến Mại Bùng Nổ - Đánh Tan Nóng Bức
        </h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".banner-next-btn",
              prevEl: ".banner-prev-btn",
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="banner-slider"
          >
            {Banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <img
                  src={banner}
                  alt={`Banner ${(index % 3) + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="banner-prev-btn absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition-all">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="banner-next-btn absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition-all">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <style>{`
          .banner-slider .swiper-pagination {
            position: relative !important;
            margin-top: 20px;
          }
          .banner-slider .swiper-pagination-bullet {
            background: rgba(59, 130, 246, 0.5) !important;
            opacity: 1 !important;
            margin: 0 4px !important;
          }
          .banner-slider .swiper-pagination-bullet-active {
            background: #3b82f6 !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BannerSlider;
