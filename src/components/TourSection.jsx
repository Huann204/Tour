import React from "react";
import Tamdao from "../assets/img/tamdao.png";
const TourSection = ({ title, aos }) => {
  const japan =
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop";
  const star =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FFD700' viewBox='0 0 24 24'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E";

  const tours = [
    {
      title: "Hà Nội - Lào Cai - SaPa 4N3Đ",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop",
      priceOld: 13650000,
      priceNew: 2590000,
      code: "123456789",
      departureDate: "22/07/2024",
      duration: "10 Ngày 9 Đêm",
      stock: 10,
    },
    {
      title: "Tour 2024 Phú Quốc - Thiên Đường Đảo Ngọc (3N2D)",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop",
      priceOld: 13650000,
      priceNew: 2590000,
      code: "123456789",
      departureDate: "22/07/2024",
      duration: "10 Ngày 9 Đêm",
      stock: 10,
    },
    {
      title: "Combo Đà Nẵng 2024: ĐÀ NẴNG - HỘI AN - BÀ NÀ HILL",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop",
      priceOld: 13650000,
      priceNew: 2590000,
      code: "123456789",
      departureDate: "22/07/2024",
      duration: "10 Ngày 9 Đêm",
      stock: 10,
    },
    {
      title: "Combo Đà Nẵng 2024: ĐÀ NẴNG - HỘI AN - BÀ NÀ HILL",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop",
      priceOld: 13650000,
      priceNew: 2590000,
      code: "123456789",
      departureDate: "22/07/2024",
      duration: "10 Ngày 9 Đêm",
      stock: 10,
    },
    {
      title: "Hà Nội - Lào Cai - SaPa 4N3Đ",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop",
      priceOld: 13650000,
      priceNew: 2590000,
      code: "123456789",
      departureDate: "22/07/2024",
      duration: "10 Ngày 9 Đêm",
      stock: 10,
    },
    {
      title: "Tour 2024 Phú Quốc - Thiên Đường Đảo Ngọc (3N2D)",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop",
      priceOld: 13650000,
      priceNew: 2590000,
      code: "123456789",
      departureDate: "22/07/2024",
      duration: "10 Ngày 9 Đêm",
      stock: 10,
    },
    {
      title: "Combo Đà Nẵng 2024: ĐÀ NẴNG - HỘI AN - BÀ NÀ HILL",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop",
      priceOld: 13650000,
      priceNew: 2590000,
      code: "123456789",
      departureDate: "22/07/2024",
      duration: "10 Ngày 9 Đêm",
      stock: 10,
    },
    {
      title: "Combo Đà Nẵng 2024: ĐÀ NẴNG - HỘI AN - BÀ NÀ HILL",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=240&fit=crop",
      priceOld: 13650000,
      priceNew: 2590000,
      code: "123456789",
      departureDate: "22/07/2024",
      duration: "10 Ngày 9 Đêm",
      stock: 10,
    },
  ];

  return (
    <div className="mt-11 px-4 lg:mx-[91px]" data-aos={aos}>
      <h2 className="text-primary font-bold text-2xl lg:text-4xl text-center mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {tours.map((tour, index) => (
          <div
            className="bg-white pb-4 shadow-md rounded-lg mx-2 mb-[10px]"
            key={index}
          >
            <div className="w-full h-[237px]">
              <img
                className="w-full h-full object-cover rounded-t-lg"
                src={japan}
                alt={`Tour ${tour}`}
              />
            </div>
            <div className="px-4">
              <h3 className="text-[#25282B]  font-bold my-3 text-start line-clamp-2">
                {tour.title}
              </h3>
              <div className="flex flex-col lg:flex-row text-sm lg:text-[15px] lg:gap-3  font-semibold mb-2">
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
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} className="w-4 h-4" src={star} alt="star" />
                  ))}
                  <span className="text-[#8C8C8C]">(5)</span>
                </div>
                <div className="flex items-center font-bold gap-3">
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
      <div className="w-32 cursor-pointer mb-11 h-10 border-2 border-primary  text-primary rounded-lg flex items-center justify-center mx-auto mt-6 hover:bg-primary hover:text-white">
        Xem Tất Cả
      </div>
      <div>
        <img className="w-full" src={Tamdao} alt="" />
      </div>
    </div>
  );
};

export default TourSection;
