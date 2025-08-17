import React, { useState } from "react";
import Background from "../assets/img/Background.png";
import Map from "../assets/img/Map.png";
import { RxCaretDown } from "react-icons/rx";
import User from "../assets/img/Group.png";
import Calendar from "../assets/img/Calendar.png";
import Search from "../assets/img/Search.png";
import Japan from "../assets/img/Japan.jpg";
import { RiMapPinLine } from "react-icons/ri";

const locations = [
  { name: "Nhật Bản", tours: 50, img: Japan },
  { name: "Hàn Quốc", tours: 30, img: Japan },
  { name: "Thái Lan", tours: 40, img: Japan },
];

const HeroSection = (prop) => {
  const [focus, setFocus] = useState(false);
  const [valueInput, setValueInput] = useState("");

  return (
    <div
      className="w-full flex justify-center bg-cover bg-center bg-no-repeat h-[716px] lg:h-[611px] px-4 pt-[106px]"
      {...prop}
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="lg:w-[768px]">
        {/* Title */}
        <div className="mx-auto text-[27px] lg:text-4xl text-primary font-bold px-4 tracking-[1.8px] text-center">
          Du lịch Châu Á - Khám phá Mỹ, Úc, Âu Đi nơi đâu bạn muốn
        </div>
        <div className="text-center font-normal mx-auto mt-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vero
          explicabo corrupti? Molestiae alias et obcaecati commodi!
          Perspiciatis, atque quasi
        </div>

        {/* Search Box */}
        <div className="bg-[#00000066] rounded-xl p-4 lg:p-10 mt-8">
          {/* Input 1: Địa điểm */}
          <div className="flex bg-white py-[18px] px-3 rounded-xl mb-3 lg:mb-6 relative">
            <img src={Map} alt="" className="mr-3" />
            <div className="w-full flex items-center">
              <input
                className="w-full outline-none"
                type="text"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                placeholder="Bạn muốn đi đâu ?"
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
            </div>
            <RxCaretDown />

            {focus && (
              <div
                className="absolute bg-white top-full left-0 grid grid-cols-1 lg:grid-cols-2 rounded-xl py-4 px-7 gap-3 w-full"
                onMouseDown={(e) => e.preventDefault()} // tránh mất focus
              >
                <div className="flex text-primary font-semibold items-center gap-2 w-full lg:col-span-2">
                  <RiMapPinLine /> Địa điểm hot
                </div>
                {locations.map((loc, index) => (
                  <div
                    key={index}
                    className="flex text-primary items-center gap-3 w-full cursor-pointer"
                    onClick={() => {
                      setValueInput(loc.name), setFocus(false);
                    }}
                  >
                    <div className="w-[99px] h-[58px]">
                      <img
                        className="w-full h-full object-cover rounded"
                        src={loc.img}
                        alt={loc.name}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold">{loc.name}</h3>
                      <span className="font-medium text-xs text-[#A6A6A6]">
                        {loc.tours} tour
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input 2: Số lượng */}
          <div className="flex lg:inline-flex bg-white py-[18px] lg:mr-5 px-3 rounded-xl mb-3">
            <img src={User} alt="" className="mr-3" />
            <div className="w-full flex items-center">
              <input
                className="w-full outline-none"
                type="text"
                placeholder="Số lượng"
              />
              <RxCaretDown />
            </div>
          </div>

          {/* Input 3: Lịch khởi hành */}
          <div className="flex lg:inline-flex bg-white py-[18px] lg:mr-5 px-3 rounded-xl mb-3">
            <img src={Calendar} alt="" className="mr-3" />
            <div className="w-full flex items-center">
              <input
                className="w-full outline-none"
                type="date"
                placeholder="Lịch khởi hành"
              />
            </div>
          </div>

          {/* Button */}
          <div className="bg-primary flex lg:inline-flex items-center justify-center rounded-xl p-[18px] text-white gap-2 cursor-pointer">
            <img src={Search} alt="" />
            Tìm Kiếm
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
