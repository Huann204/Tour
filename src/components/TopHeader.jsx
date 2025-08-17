import React from "react";
import { FaAddressCard, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const TopHeader = (prop) => {
  return (
    <div
      className="hidden lg:block bg-[#4502C7] text-white text-sm sm"
      {...prop}
    >
      <ul className="flex items-center justify-end mr-[91px] gap-10 h-11">
        <li className="flex items-center gap-2">
          <FaPhoneAlt size={20} /> 0123.456.789
        </li>
        <li className="flex items-center gap-2">
          <IoMdMail size={20} />
          contact@28travel.com
        </li>
        <li className="flex items-center gap-2">
          <FaAddressCard size={20} />
          Số 123, đường ABC, thành phố XYZ
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
