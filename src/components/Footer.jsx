import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/img/Logo.png";
const Footer = () => {
  return (
    <div className="bg-[#CCD1D2] mt-11 py-10 rounded-xl px-5">
      <div className="bg-primary rounded-2xl px-4  text-center p-5 lg:mx-[91px] lg:flex lg:items-center lg:justify-between">
        <h2 className="font-bold text-lg text-white lg:w-96 lg:mr-6">
          Đăng ký ngay để không bỏ lỡ các chương trình của chúng tôi
        </h2>
        <div className="mt-5 p-3 bg-white rounded-2xl lg:flex lg:flex-1 lg:items-center">
          <div className="lg:w-[90%] lg:mr-3">
            <input
              className="w-full h-full border border-[#99A2A5]  rounded-lg py-[14px] px-7 outline-none"
              type="text"
              placeholder="Nhập email của bạn..."
            />
          </div>
          <div className="text-white mx-auto w-full bg-primary py-3  rounded-xl mt-3 lg:mt-0 lg:w-[163px]">
            Đăng ký ngay
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-0  mt-8 lg:mx-[91px] lg:flex lg:justify-between lg:items-center pb-8 ">
        <div className="font-medium text-sm lg:flex lg:gap-6">
          <div className="flex gap-6 justify-center mb-[10px]">
            <a href="">Trang Chủ </a>
            <a href="">Tour Trong Nước</a>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="">Tour Nước Ngoài</a>
            <a href="">Tin Tức</a>
            <a href="">Liên Hệ</a>
          </div>
        </div>
        <div className=" flex justify-center gap-6 mt-5 lg:mt-0 ">
          <a>
            <FaFacebook size={24} />
          </a>
          <a>
            <FaSnapchatGhost size={24} />
          </a>
          <a>
            <FaInstagram size={24} />
          </a>
          <a href="">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
      <div className="text-[#667479] lg:flex lg:mx-[91px] lg:justify-between lg:items-center">
        <a href="/" className="flex justify-center mx-auto lg:order-2 w-56">
          <img className="w-full " src={Logo} alt="" />
        </a>
        <div className="flex gap-6 justify-center mt-5 lg:order-3">
          <span>Điều khoản dịch vụ</span>
          <span>Chính sách bảo mật</span>
        </div>
        <div className="text-center mt-5 lg:order-1">
          <span>© 2024 28Tech. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
