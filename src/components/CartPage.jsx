import Halong from "../assets/img/halong.jpg";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";

const CartPage = () => {
  return (
    <div className="px-4 lg:mx-[232px] mt-[60px]">
      <div className="shadow-[0px_1.75px_3.51px_0px_#0000001F] py-5 px-[15px] rounded-2xl mb-[30px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-primary font-semibold lg:text-xl cursor-pointer hover:underline">
            Giỏ hàng
          </span>
          <div className="text-[#52575C] flex items-center cursor-pointer hover:text-primary transition">
            <span className="font-normal text-xs lg:text-[15px] mr-1">
              Quay lại mua hàng
            </span>
            <IoIosArrowForward />
          </div>
        </div>

        {/* Một item trong giỏ hàng */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div className="grid grid-cols-10 gap-2 items-start">
            {/* Checkbox (mobile trên đầu, desktop cột riêng) */}
            <div className="col-span-10 lg:col-span-1 flex justify-between mb-4 lg:mb-0">
              <input
                className="w-5 h-5 accent-primary cursor-pointer"
                type="checkbox"
              />
              {/* Nút xoá cho mobile */}
              <IoIosClose
                size={21}
                className="cursor-pointer hover:text-red-500 transition lg:hidden"
              />
            </div>

            {/* Ảnh */}
            <div className="col-span-3 lg:col-span-2 relative">
              <img
                className="rounded-lg w-full h-full object-cover hover:scale-[1.02] transition cursor-pointer"
                src={Halong}
                alt="Tour Hạ Long"
              />
              {/* Nút xoá desktop */}
              <IoIosClose
                size={21}
                className="hidden lg:block absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer transition"
              />
            </div>

            {/* Thông tin tour + hành khách */}
            <div className="col-span-7 lg:col-span-7 lg:grid lg:grid-cols-2">
              {/* Thông tin tour */}
              <div className="text-xs lg:text-sm">
                <div className="text-[#25282B] text-sm lg:text-base font-medium lg:mb-3 line-clamp-2 hover:text-primary cursor-pointer transition">
                  Khám Phá Vịnh Xanh – Tour Cát Bà - 3N2
                </div>
                <div className="text-[#8C8C8C] font-normal">
                  Ngày khởi hành
                  <span className="font-semibold"> 20/10/2004</span>
                </div>
                <div className="text-[#8C8C8C] font-normal">
                  Khởi hành tại:
                  <span className="font-semibold"> Hà Nội</span>
                </div>
              </div>

              {/* Số lượng hành khách (desktop) */}
              <div className="hidden lg:block text-sm text-[#5D5E60]">
                <div className="flex justify-end mb-[18px]">
                  Số lượng hành khách
                </div>

                {/* Người lớn */}
                <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                  <div className="flex items-center">
                    <span className="min-w-[100px]">Người lớn</span>
                    <input
                      className="w-12 font-medium border-b border-[#ddd] focus:outline-none"
                      type="number"
                    />
                  </div>
                  <div className="flex gap-1 text-base">
                    <span>1</span>
                    <span className="text-primary">x 100000</span>
                  </div>
                </div>

                {/* Trẻ em */}
                <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                  <div className="flex items-center">
                    <span className="min-w-[100px]">Trẻ em</span>
                    <input
                      className="w-12 font-medium border-b border-[#ddd] focus:outline-none"
                      type="number"
                    />
                  </div>
                  <div className="flex gap-1 text-base">
                    <span>1</span>
                    <span className="text-primary">x 100000</span>
                  </div>
                </div>

                {/* Em bé */}
                <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                  <div className="flex items-center">
                    <span className="min-w-[100px]">Em bé</span>
                    <input
                      className="w-12 font-medium border-b border-[#ddd] focus:outline-none"
                      type="number"
                    />
                  </div>
                  <div className="flex gap-1 text-base">
                    <span>1</span>
                    <span className="text-primary">x 100000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thanh toán (mobile) */}
            <div className="col-span-10">
              <div className="text-[#5D5E60] text-sm lg:hidden">
                Số lượng hành khách
              </div>

              <div className="flex flex-col gap-2 font-normal text-sm text-[#5D5E60] lg:hidden">
                {/* Người lớn */}
                <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                  <div className="flex items-center">
                    <span className="min-w-[100px]">Người lớn</span>
                    <input
                      className="w-12 font-medium border-b border-[#ddd]"
                      type="number"
                    />
                  </div>
                  <div className="flex gap-1 text-base">
                    <span>1</span>
                    <span className="text-primary">x 100000</span>
                  </div>
                </div>

                {/* Trẻ em */}
                <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                  <div className="flex items-center">
                    <span className="min-w-[100px]">Trẻ em</span>
                    <input
                      className="w-12 font-medium border-b border-[#ddd]"
                      type="number"
                    />
                  </div>
                  <div className="flex gap-1 text-base">
                    <span>1</span>
                    <span className="text-primary">x 100000</span>
                  </div>
                </div>

                {/* Em bé */}
                <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                  <div className="flex items-center">
                    <span className="min-w-[100px]">Em bé</span>
                    <input
                      className="w-12 font-medium border-b border-[#ddd]"
                      type="number"
                    />
                  </div>
                  <div className="flex gap-1 text-base">
                    <span>1</span>
                    <span className="text-primary">x 100000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end item */}

        {/* Tổng kết */}
        <div className="flex flex-col gap-2 text-sm text-[#5D5E60]">
          {/* Nhập mã giảm giá */}
          <div className="flex justify-between lg:justify-end">
            <div className="flex w-full lg:w-1/2">
              <input
                className="h-10 border border-[#9EA0A3] text-[#333] outline-none rounded-s-[5px] px-3 flex-1"
                type="text"
              />
              <button className="rounded-e-[5px] text-white bg-primary px-6 hover:bg-primary/80 transition cursor-pointer">
                Dùng Mã
              </button>
            </div>
          </div>

          {/* Tạm tính */}
          <div className="flex justify-between">
            <span className="text-sm">Tạm tính:</span>
            <span className="text-base">3.500.000đ</span>
          </div>

          {/* Giảm */}
          <div className="flex justify-between">
            <span className="text-sm">Giảm:</span>
            <span className="text-base">-0đ</span>
          </div>

          {/* Tổng cộng */}
          <div className="flex justify-between items-center text-base gap-2">
            <span>Tổng Cộng</span>
            <span className="text-primary text-xl font-semibold">
              1.000.000đ
            </span>
          </div>
        </div>
      </div>
      <div className="py-5 px-[15px] shadow-[0px_1.75px_3.51px_0px_#0000001F]">
        <h3 className="text-base lg:text-xl text-primary font-semibold mb-6">
          Thông tin khách hàng
        </h3>
        <div className="mb-[15px]">
          <input
            className="py-[14px] px-5 w-full border border-[ #E0E0E0] rounded-md font-normal text-[14px] outline-none "
            type="text"
            placeholder="Họ và tên"
          />
        </div>
        <div className="mb-[15px]">
          <input
            className="py-[14px] px-5 w-full border border-[ #E0E0E0] rounded-md font-normal text-[14px] outline-none "
            type="text"
            placeholder="Họ và tên"
          />
        </div>
        <div className="mb-[15px]">
          <textarea
            className="py-[14px] px-5 w-full border border-[ #E0E0E0] rounded-md font-normal text-[14px] outline-none h-[100px] "
            type="text"
            placeholder="Họ và tên"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base lg:text-xl text-primary font-semibold mb-5">
            Chọn Phương Thức Thanh Toán
          </h3>
          <div className="flex items-center gap-2">
            <input className="w-5 h-5 accent-primary" type="radio" />
            <label className="text-sm font-normal text-[#333333]">
              Thanh toán tiền mặt
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input className="w-5 h-5 accent-primary" type="radio" />
            <label className="text-sm font-normal text-[#333333]">
              Ví Momo
            </label>
          </div>{" "}
          <div className="flex items-center gap-2">
            <input className="w-5 h-5 accent-primary" type="radio" />
            <label className="text-sm font-normal text-[#333333]">
              Chuyển khoản ngân hàng
            </label>
          </div>
          <button className="bg-primary lg:w-1/2 lg:mx-auto text-white h-11 font-semibold cursor-pointer text-xl rounded-lg mt-[30px]">
            ĐẶT TOUR
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
