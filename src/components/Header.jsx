import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Logo from "../assets/img/Logo.png";
import Card from "../assets/img/Cart.png";
import Menu from "../assets/img/Menu.png";
import Caret from "../assets/img/caret.png";
import { FaCaretDown } from "react-icons/fa";
const Header = (prop) => {
  const [menu, setMenu] = useState(false);

  const [domestic, setDomestic] = useState(false);
  const [foreign, setForeign] = useState(false);

  return (
    <div
      className="bg-white flex items-center justify-between p-4 lg:px-[91px] lg:py-3"
      {...prop}
    >
      <div className="cursor-pointer lg:hidden" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" />
      </div>
      {menu && (
        <>
          <div className="fixed lg:hidden top-0 left-0 h-full w-[280px] bg-white z-[999] transition-all">
            <ul className="w-[280px] h-full bg-white relative text-base">
              <li className="flex flex-wrap border ">
                <a className="p-3 font-semibold" href="">
                  Trang chủ
                </a>
              </li>
              <li className="flex items-center flex-wrap justify-between border-b border-solid">
                <a className="p-3 font-semibold" href="">
                  Tour Trong Nước
                </a>
                <div
                  className="p-3 border-l cursor-pointer"
                  onClick={() => setDomestic(!domestic)}
                >
                  <FaCaretDown />
                </div>
                {domestic && (
                  <ul className="w-full">
                    <li className="py-2 px-5  text-primary hover:bg-primary hover:text-white ">
                      <a className="" href="">
                        Tour Miền Bắc
                      </a>
                    </li>
                    <li className="py-2 px-5  text-primary hover:bg-primary hover:text-white">
                      <a className="" href="">
                        Tour Miền Trung
                      </a>
                    </li>
                    <li className="py-2 px-5  text-primary hover:bg-primary hover:text-white">
                      <a className="" href="">
                        Tour Miền Nam
                      </a>
                    </li>
                    <li className="py-2 px-5 text-primary hover:bg-primary hover:text-white ">
                      <a className="" href="">
                        Tour Xuyên Việt
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="flex items-center flex-wrap justify-between border-b border-solid">
                <a className="p-3 font-semibold">Tour Nước Ngoài</a>
                <div
                  className="p-3 border-l cursor-pointer "
                  onClick={() => setForeign(!foreign)}
                >
                  <FaCaretDown className="" />
                </div>
                {foreign && (
                  <ul className="w-full">
                    <li className="py-2 px-5  text-primary hover:bg-primary hover:text-white ">
                      <a className="" href="">
                        Tour Châu Á
                      </a>
                    </li>
                    <li className="py-2 px-5  text-primary hover:bg-primary hover:text-white">
                      <a className="" href="">
                        Tour Châu Âu
                      </a>
                    </li>
                    <li className="py-2 px-5  text-primary hover:bg-primary hover:text-white">
                      <a className="" href="">
                        Tour Châu Mỹ
                      </a>
                    </li>
                    <li className="py-2 px-5 text-primary hover:bg-primary hover:text-white ">
                      <a className="" href="">
                        Tour Châu Úc
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="flex flex-wrap border-b border-solid">
                <a className="p-3 font-semibold">Tin Tức</a>
              </li>
              <li className="flex flex-wrap border-b border-solid">
                <a className="p-3 font-semibold">Liên Hệ</a>
              </li>
            </ul>
          </div>
          <div
            className="fixed lg:hidden top-0 left-0 w-full h-full bg-black/50 z-[998]"
            onClick={() => setMenu(!menu)}
          ></div>
        </>
      )}
      <div className="cursor-pointer">
        <img
          className=" object-cover lg:w-[218px] lg:h-[50px]"
          src={Logo}
          alt=""
        />
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-10 items-center font-medium">
          <li>Trang chủ</li>
          <li className="flex items-center gap-[6px] group relative">
            Tour Trong Nước <img src={Caret} alt="" />
            <div className=" hidden bg-white group-hover:block absolute w-[280px] h-[176px] rounded-b-xl  top-full py-2">
              <ul>
                {[
                  "Tour Miền Bắc",
                  "Tour Miền Trung",
                  "Tour Miền Nam",
                  "Tour Xuyên Việt",
                ].map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-primary w-full py-2 pl-[22px] hover:text-white hover:bg-primary"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <div className="flex items-center gap-[6px] group relative">
            Tour Nước Ngoài <img src={Caret} alt="" />
            <div className=" hidden bg-white group-hover:block absolute w-[280px] h-[176px] rounded-b-xl  top-full py-2">
              <ul>
                {[
                  "Tour Châu Á",
                  "Tour Châu Âu",
                  "Tour Châu Mỹ",
                  "Tour Châu Úc",
                ].map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-primary w-full py-2 pl-[22px] hover:text-white hover:bg-primary"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <li>Tin Tức</li>
          <li>Liên Hệ</li>
        </ul>
      </div>
      <div className="cursor-pointer">
        <img className=" object-cover" src={Card} alt="" />
      </div>
    </div>
  );
};

export default Header;
