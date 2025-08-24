import React, { useEffect, useState } from "react";
import Viewer from "react-viewer";
import BannerTour from "../assets/img/banner7.jpg";
import Tour from "../assets/img/banner13.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Star from "../assets/img/Star.png";
import { FaTicketSimple, FaTruckPlane } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

import { DetailTour } from "../services/DetailTour";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "./CartContext";
const TourDetailPage = () => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    toast.success("Đã thêm vào giỏ hàng");
    const item = {
      id: detailTour.code,
      title: detailTour.title,
      image: detailTour.image,
      departureDate: detailTour.departureDate,
      adults,
      children,
      babies,
      priceAdult: detailTour.prices?.adult || 0,
      priceChild: detailTour.prices?.child || 0,
      priceBaby: detailTour.prices?.baby || 0,
      total,
    };
    addToCart(item);
  };
  const { code } = useParams();
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailTour, setDetailTour] = useState({});

  // state số lượng
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);

  useEffect(() => {
    DetailTour(code).then((res) => {
      setDetailTour(res);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [code]);

  // tính tổng
  const total =
    adults * (detailTour.prices?.adult || 0) +
    children * (detailTour.prices?.child || 0) +
    babies * (detailTour.prices?.baby || 0);

  const viewerImages =
    detailTour.images?.map((img) => ({
      src: `http://localhost:5000/${img}`,
      alt: "Tour Image",
    })) || [];

  const openViewer = (index) => {
    setActiveIndex(index);
    setVisible(true);
  };

  return (
    <div>
      <div className="h-[253px] relative ">
        <img className="h-full w-full object-cover" src={BannerTour} alt="" />

        <div className="absolute lg:pl-[91px]  rounded-xl text-white p-4 flex flex-col justify-end w-full h-full bottom-0 left-0 bg-[linear-gradient(180deg,rgba(69,2,199,0)_58.85%,rgba(69,2,199,0.9)_100%)]">
          <h2 className="font-medium text-xl mb-2 lg:text-[32px]">
            Tour Trong Nước
          </h2>
          <div className="flex gap-2 items-center text-xs lg:text-base">
            <a href="">Trang Chủ</a>
            <MdKeyboardDoubleArrowRight />
            <a href="">Tour Trong Nước</a>
          </div>
        </div>
      </div>
      <div className="px-4 lg:grid lg:grid-cols-10 lg:mx-[91px]">
        <div className="rounded-[10px] bg-white shadow-[0px_1.75px_3.51px_0px_#0000001F] p-[15px] mt-11 gap-[15px] lg:col-span-3 lg:order-2 lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
          <h2 className="text-primary text-base mb-4 font-semibold">
            Chuyến Đi Của Bạn
          </h2>
          <div className="flex">
            <div className="w-[103px] h-[76px] mr-3">
              <img
                className="w-full h-full object-cover rounded-[10px]"
                src={`http://localhost:5000/${detailTour.image}`}
                alt=""
              />
            </div>
            <div>
              <span className="text-primary font-normal">
                {detailTour.title}
              </span>
              <div className="mt-2 flex items-center justify-between mb-[15px]">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} className="w-4 h-4" src={Star} alt="star" />
                  ))}
                </div>
                <div>
                  <span className="font-light text-[##1F1F1F] text-[10px]">
                    {detailTour.reviewsCount} lượt đánh giá
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#5D5E60] text-sm flex items-center gap-1">
              <FaTicketSimple size={16} />
              <span className="font-normal ">Mã Tour:</span>
              <span className=" font-normal text-primary ">
                {detailTour.code}
              </span>
            </div>
            <div className="text-[#5D5E60] text-sm flex items-center gap-1">
              <FaCalendarAlt size={16} />
              <span className="font-normal ">Thời gian:</span>
              <span className=" font-normal text-primary ">
                {detailTour.duration}
              </span>
            </div>
            <div className="text-[#5D5E60] text-sm flex items-center gap-1">
              <FaTruckPlane size={16} />
              <span className="font-normal ">Phương tiện:</span>
              <span className=" font-normal text-primary ">
                {detailTour.vehicle}
              </span>
            </div>
            <div className="text-[#5D5E60] text-sm flex items-center gap-1">
              <FaTicketSimple size={16} />
              <span className="font-normal ">Ngày khởi hành:</span>
              <span className=" font-normal text-primary ">
                {detailTour.departureDate}
              </span>
            </div>
            <div className="text-[#5D5E60] text-sm flex flex-col ">
              <span className="mb-1">Khởi hành tại</span>
              <select className="border border-[#5D5E60] py-[10px] px-[14px] text-sm rounded-md">
                <option value="">Hà Nội</option>
                <option value="">Đà Nẵng</option>
                <option value="">Hồ Chí Minh</option>
              </select>
            </div>
            <div className="font-normal text-sm text-[#5D5E60] ">
              <p className="mb-2">Số Lượng hành khách</p>
              <div className="flex flex-col gap-2">
                {/* Người lớn */}
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center ">
                    <span className="min-w-[100px]">Người lớn</span>
                    <input
                      className="w-12 font-medium border-b border-[#ddd]"
                      type="number"
                      value={adults}
                      onChange={(e) =>
                        setAdults(Math.max(0, Number(e.target.value)))
                      }
                    />
                  </div>
                  <div className="flex gap-1 text-base">
                    <span>{adults}</span>
                    <span className="text-primary">
                      x {detailTour.prices?.adult || 0}
                    </span>
                  </div>
                </div>
                {/* Trẻ em */}
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center ">
                    <span className="min-w-[100px]">Trẻ em</span>
                    <input
                      className="w-12 font-medium border-b border-[#ddd]"
                      type="number"
                      value={children}
                      onChange={(e) =>
                        setChildren(Math.max(0, Number(e.target.value)))
                      }
                    />
                  </div>
                  <div className="flex gap-1 text-base">
                    <span>{children}</span>
                    <span className="text-primary">
                      x {detailTour.prices?.child || 0}
                    </span>
                  </div>
                </div>
                {/* Em bé */}
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center ">
                    <span className="min-w-[100px]">Em bé</span>
                    <input
                      className="w-12 font-medium border-b border-[#ddd]"
                      type="number"
                      value={babies}
                      onChange={(e) =>
                        setBabies(Math.max(0, Number(e.target.value)))
                      }
                    />
                  </div>
                  <div className="flex gap-1 text-base">
                    <span>{babies}</span>
                    <span className="text-primary">
                      x {detailTour.prices?.baby || 0}
                    </span>
                  </div>
                </div>
                {/* Tổng cộng */}
                <div className="flex justify-between items-center text-base gap-2">
                  <span className="">Tổng Cộng</span>
                  <div className="flex gap-1 text-base">
                    <span className="text-primary text-xl font-semibold">
                      {total.toLocaleString()} đ
                    </span>
                  </div>
                </div>
                <Link
                  to={"/cart"}
                  onClick={handleAddToCart}
                  className="w-full text-base font-semibold bg-primary h-11 text-white flex items-center justify-center rounded-lg cursor-pointer"
                >
                  Thêm Vào giỏ hàng
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* chi tiết tour */}
        <div className="lg:col-span-7 lg:order-1 mt-11 lg:mr-5">
          <div>
            <div className="aspect-video lg:aspect-[16/9]">
              <img
                className="w-full h-full object-cover rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
                src={`http://localhost:5000/${detailTour.image}`}
                alt="Hạ Long Bay"
                onClick={() => openViewer(0)}
              />
            </div>
            <div className="grid mt-4 grid-cols-4 gap-1 ">
              {detailTour.images?.slice(1).map((image, index) => (
                <div key={index + 1} className="h-16 lg:h-32">
                  <img
                    className="object-cover w-full h-full rounded-[10px] cursor-pointer hover:opacity-90 transition-opacity"
                    src={`http://localhost:5000/${image}`}
                    alt=""
                    onClick={() => openViewer(index + 1)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 order-3">
          <div className="mt-8 p-[15px] shadow-[0px_1.75px_3.51px_0px_#0000001F]">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Thông Tin Tour
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {detailTour.description}
            </p>
            <img
              className="rounded-xl w-full"
              src={`http://localhost:5000/${detailTour.image}`}
              alt=""
            />
            <div className="flex justify-center mt-8 ">
              <div className="text-primary cursor-pointer text-sm  rounded py-3 px-5 border border-primary inline-block hover:bg-primary hover:text-white">
                Xem tất cả
              </div>
            </div>
          </div>
          <div className="space-y-6 mt-10">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-primary">
                Lịch trình tour
              </h4>
              {detailTour.schedule?.map((item, index) => (
                <div key={index}>
                  <p className="text-white bg-primary inline-block p-2 rounded-md mt-[15px]">
                    {item.day} | {item.title}
                  </p>
                  <div className="p-[15px] text-sm shadow-[0px_1.75px_3.51px_0px_#0000001F] rounded-[10px]">
                    <p>{item.content}</p>
                    <div>
                      <img
                        src={`http://localhost:5000/${item.image}`}
                        className="object-cover w-full mt-[10px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* React Viewer Component */}
      <Viewer
        visible={visible}
        onClose={() => setVisible(false)}
        images={viewerImages}
        activeIndex={activeIndex}
        onMaskClick={() => setVisible(false)}
        zoomable={true}
        rotatable={true}
        scalable={true}
        changeable={true}
        attribute={false}
        zoomSpeed={0.1}
        defaultImg={{
          src: "",
          alt: "Loading...",
        }}
        noNavbar={false}
        noImgDetails={false}
        noFooter={false}
      />
    </div>
  );
};

export default TourDetailPage;
