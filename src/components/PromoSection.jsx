import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Placeholder images
const japan =
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop";
const star =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFD700' viewBox='0 0 24 24'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E";

const PromoSection = (prop) => {
  return (
    <div className="bg-white w-full px-4" {...prop}>
      <div className="bg-blue-600 mt-11 px-4 lg:mx-[91px] py-[30px] rounded-xl text-white text-center grid grid-cols-1 lg:grid-cols-10 ">
        <div className="lg:col-span-3">
          <h2 className="text-[28px] font-bold">
            ƯU ĐÃI 2025 <br /> TOUR GIỜ CHÓT
          </h2>
          <p className="mb-9">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <span className="font-bold text-2xl mb-4">Kết thúc sau</span>
          <div className="flex justify-center gap-5 text-3xl mb-11">
            <div className="bg-white w-16 h-14 rounded-xl">
              <span className="font-bold text-blue-600 flex items-center justify-center h-full">
                12
              </span>
            </div>
            <div className="bg-white w-16 h-14 rounded-xl">
              <span className="font-bold text-blue-600 flex items-center justify-center h-full">
                20
              </span>
            </div>
            <div className="bg-white w-16 h-14 rounded-xl">
              <span className="font-bold text-blue-600 flex items-center justify-center h-full">
                30
              </span>
            </div>
          </div>
          <div className="mb-7">
            <h3 className="text-base font-bold">Giảm đến</h3>
            <span className="text-[#FFD63A] text-[40px] font-bold">
              990.000<strong className="underline">đ</strong>
            </span>
          </div>
        </div>
        {/* Fixed Swiper with proper configuration */}
        <div className="relative lg:col-span-7">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            autoplay={{
              delay: 2000, // 2 giây mỗi slide
              disableOnInteraction: false, // tiếp tục autoplay sau khi user tương tác
              pauseOnMouseEnter: true, // dừng khi hover
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
            className="tour-swiper"
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white pb-4 shadow-md rounded-lg mx-2">
                  <div className="w-full h-[237px]">
                    <img
                      className="w-full h-full object-cover rounded-t-lg"
                      src={japan}
                      alt={`Tour ${item}`}
                    />
                  </div>
                  <div className="px-4">
                    <h3 className="text-[#25282B] font-bold py-3 text-start">
                      Hà Nội - Lào Cai - SaPa 4N3Đ
                    </h3>
                    <div className="flex gap-2 text-sm font-semibold mb-2">
                      <span className="text-[#52575C] line-through">
                        13.650.000đ
                      </span>
                      <span className="text-[#DA0808]">2.590.000 đ</span>
                    </div>
                    <div className="text-[#8C8C8C] text-xs text-start mb-4">
                      <p>
                        Mã Tour: <span className="font-bold">123456789</span>
                      </p>
                      <p>
                        Ngày khởi hành:{" "}
                        <span className="font-bold">26/01/2025</span>
                      </p>
                      <p>
                        Thời gian:{" "}
                        <span className="font-bold">10 ngày 9 đêm</span>
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            className="w-4 h-4"
                            src={star}
                            alt="star"
                          />
                        ))}
                        <span className="text-[#8C8C8C]">(5)</span>
                      </div>
                      <div className="flex items-center font-bold gap-3">
                        <p className="text-[#25282B]">Số chỗ còn:</p>
                        <span className="bg-[#DA0808] rounded-md w-8 h-8 text-white flex items-center justify-center">
                          {10 - index}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev-custom absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition-all">
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
          <div className="swiper-button-next-custom absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 cursor-pointer hover:bg-opacity-100 transition-all">
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

        {/* Custom styles for pagination */}
        <style>{`
          .tour-swiper .swiper-pagination {
            position: relative !important;
            margin-top: 20px;
          }
          .tour-swiper .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.5) !important;
            opacity: 1 !important;
          }
          .tour-swiper .swiper-pagination-bullet-active {
            background: white !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default PromoSection;
