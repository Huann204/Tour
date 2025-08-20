import React, { useEffect } from "react";
import BannerTour from "../assets/img/BannerTour.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaEye, FaFilter, FaSquareArrowUpRight } from "react-icons/fa6";
import {
  BsArrowDownRightSquareFill,
  BsFillArrowDownRightSquareFill,
  BsFillArrowUpRightSquareFill,
} from "react-icons/bs";
import {
  AiFillTag,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import TourSection from "./TourSection";
import { AiFillCaretDown } from "react-icons/ai";
const ForeignTourPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="">
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
        <div className="mt-11 px-4 lg:px-0 lg:mx-[91px]">
          <div className="lg:grid lg:grid-cols-10">
            <div className="hidden lg:block lg:col-span-2 mr-6">
              <div className="grid grid-cols-1 bg-white shadow-[0_0_4px_0_#00000040] rounded-[10px] p-[15px]">
                <div className="text-primary font-semibold flex justify-between items-center ">
                  <span>Bộ Lọc</span>
                  <FaFilter />
                </div>
                <div>
                  <div className="text-[#898B8D] text-sm  mt-4 ">
                    <span>Điểm đi</span>
                    <div className="flex flex-col relative">
                      <select
                        className="border rounded-md border-[#898B8D] mt-1 appearance-none outline-none px-[14px] py-[11px]  "
                        name=""
                        id=""
                      >
                        <option value="">-- Chọn điểm đi --</option>
                        <option value="">Hà Nội</option>
                        <option value="">Hà Nội 1</option>
                        <option value="">Hà Nội 2</option>
                      </select>
                      <AiFillCaretDown className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-3" />
                    </div>
                  </div>
                  <div className="text-[#898B8D] text-sm  mt-4 ">
                    <span>Điểm đi</span>
                    <div className="flex flex-col relative ">
                      <select
                        className="border rounded-md border-[#898B8D] mt-1 appearance-none outline-none px-[14px] py-[11px]  "
                        name=""
                        id=""
                      >
                        <option value="">-- Chọn điểm đếm --</option>
                        <option value="">Nhật Bản</option>
                        <option value="">Trung Quốc</option>
                        <option value="">Hà Quốc</option>
                      </select>
                      <AiFillCaretDown className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-3" />
                    </div>
                  </div>
                  <div className="text-[#898B8D] text-sm  mt-4  ">
                    <span>Ngày khởi hành</span>
                    <div className="flex flex-col relative">
                      <input
                        type="date"
                        className="border rounded-md  border-[#898B8D] mt-1 appearance-none outline-none px-[14px] py-[11px]"
                      />
                    </div>
                  </div>
                  <div className="text-[#898B8D] text-sm  mt-4 ">
                    <span>Số lượng hành khách</span>
                    <div className="flex border border-[#898B8D] px-[14px] py-[11px] justify-between rounded-md">
                      <span>Người lớn</span>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-9 outline-none"
                      />
                    </div>
                    <div className="flex border border-[#898B8D] px-[14px] py-[11px] justify-between mt-1 rounded-md">
                      <span>Trẻ em</span>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-9 outline-none"
                      />
                    </div>
                    <div className="flex border border-[#898B8D] px-[14px] py-[11px] justify-between mt-1 rounded-md">
                      <span>Em bé</span>
                      <input
                        type="number"
                        placeholder="0"
                        className="w-9 outline-none"
                      />
                    </div>
                    <div className="text-[#898B8D] text-sm  mt-4 ">
                      <span>Điểm đi</span>
                      <div className="flex flex-col relative">
                        <select
                          className="border rounded-md border-[#898B8D] mt-1 appearance-none outline-none px-[14px] py-[11px]  "
                          name=""
                          id=""
                        >
                          <option value="">-- Chọn mức giá --</option>
                          <option value="">Dưới 1 triệu</option>
                          <option value="">Từ 1tr đến 3tr</option>
                          <option value="">Từ 3tr đến 6tr </option>
                          <option value="">Từ 6tr đến 10tr </option>
                        </select>
                        <AiFillCaretDown className="absolute pointer-events-none top-1/2 -translate-y-1/2 right-3" />
                      </div>
                    </div>
                    <div className="bg-primary mt-4 font-medium text-sm w-full h-10 text-white cursor-pointer flex items-center justify-center rounded-md">
                      Áp dụng
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <h1 className="text-primary font-semibold text-2xl">
                Tour Trong Nước
              </h1>
              <p className="text-sm mt-[10px] text-[#747578]">
                Du lịch Châu Á: là châu lục lớn và đông dân nhất thế giới. Châu
                Á cũng có nhiều danh lam thắng cảnh đẹp tại một số quốc gia như
                Hàn Quốc, Nhật Bản, Trung Quốc, Việt Nam,... và VK Travel là nhà
                tổ chức du lịch chuyên nghiệp hàng đầu Châu Á, đã 5 lần liên
                tiếp nhận giải TTG Travel Awards. Hãy cùng 28.Travel du lịch
                Châu Á để tận hưởng những dịch vụ tốt nhất.
              </p>
              <div className="text-[#747578] mt-[10px] lg:flex lg:items-center lg:gap-4">
                <div className="flex gap-4 lg:items-center">
                  <span className="font-semibold text-sm">Sắp xếp:</span>
                  <div className="flex items-center gap-1  text-xs cursor-pointer hover:text-red-600">
                    <span>Giá Tăng Dần</span>
                    <BsFillArrowUpRightSquareFill />
                  </div>
                  <div className="flex items-center gap-1 text-xs cursor-pointer hover:text-red-600">
                    <span>Giá Giảm Dần</span>
                    <BsFillArrowDownRightSquareFill />
                  </div>
                </div>
                <div className="text-xs flex gap-4 mt-3 lg:mt-0">
                  <div className="flex gap-1 cursor-pointer hover:text-red-600">
                    <span className="">Khuyến mại hot</span>
                    <AiFillTag />
                  </div>
                  <div className="flex gap-1 cursor-pointer hover:text-red-600">
                    <span className="">Xem nhiều</span>
                    <FaEye />
                  </div>
                </div>
                <div className="mt-[14px] flex justify-between items-center lg:hidden">
                  <div className="text-sm">
                    <span>Tất cả: </span>
                    <span className="font-bold">101 Tour</span>
                  </div>
                  <div className="text-primary font-semibold flex items-center gap-1">
                    Bộ Lọc
                    <span>
                      <FaFilter />
                    </span>
                  </div>
                </div>
              </div>
              <div className=" ">
                <TourSection hidden={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeignTourPage;
