import { IoIosArrowForward, IoIosClose } from "react-icons/io";
import { useCart } from "./CartContext";
import { useEffect, useState } from "react";

const CartPage = () => {
  const { cart, removeFromCart, updateCartItem } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [cart]);

  // Xử lý checkbox
  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Tính tổng tiền chỉ cho items được chọn
  const calculateSelectedTotal = () => {
    return cart
      .filter((item) => selectedItems.includes(item.id))
      .reduce((total, item) => {
        return (
          total +
          (item.adults * item.priceAdult +
            item.children * item.priceChild +
            item.babies * item.priceBaby)
        );
      }, 0);
  };

  const selectedTotal = calculateSelectedTotal();

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

        {cart.length === 0 ? (
          <p>Giỏ hàng trống, quay lại chọn tour nhé!</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-4 mb-4">
              <div className="grid grid-cols-10 gap-2 items-start">
                {/* Checkbox (mobile trên đầu, desktop cột riêng) */}
                <div className="col-span-10 lg:col-span-1 flex justify-between mb-4 lg:mb-0">
                  <input
                    className="w-5 h-5 accent-primary cursor-pointer"
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  {/* Nút xoá cho mobile */}
                  <IoIosClose
                    size={21}
                    className="cursor-pointer hover:text-red-500 transition lg:hidden"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>

                {/* Ảnh */}
                <div className="col-span-3 lg:col-span-2 relative">
                  <img
                    className="rounded-lg w-full h-full object-cover hover:scale-[1.02] transition cursor-pointer"
                    src={`http://localhost:5000/${item.image}`}
                    alt={item.title}
                  />
                  {/* Nút xoá desktop */}
                  <IoIosClose
                    size={21}
                    className="hidden lg:block absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer transition"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>

                {/* Thông tin tour + hành khách */}
                <div className="col-span-7 lg:col-span-7 lg:grid lg:grid-cols-2">
                  {/* Thông tin tour */}
                  <div className="text-xs lg:text-sm">
                    <div className="text-[#25282B] text-sm lg:text-base font-medium lg:mb-3 line-clamp-2 hover:text-primary cursor-pointer transition">
                      {item.title}
                    </div>
                    <div className="text-[#8C8C8C] font-normal">
                      Ngày khởi hành:
                      <span className="font-semibold">
                        {" "}
                        {item.departureDate}
                      </span>
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
                          value={item.adults}
                          min="0"
                          onChange={(e) =>
                            updateCartItem(item.id, {
                              adults: Number(e.target.value),
                              total:
                                Number(e.target.value) * item.priceAdult +
                                item.children * item.priceChild +
                                item.babies * item.priceBaby,
                            })
                          }
                        />
                      </div>
                      <div className="flex gap-1 text-base">
                        <span>{item.adults}</span>
                        <span className="text-primary">
                          {selectedItems.includes(item.id)
                            ? `x ${item.priceAdult.toLocaleString()}`
                            : ""}
                        </span>
                      </div>
                    </div>

                    {/* Trẻ em */}
                    <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                      <div className="flex items-center">
                        <span className="min-w-[100px]">Trẻ em</span>
                        <input
                          className="w-12 font-medium border-b border-[#ddd] focus:outline-none"
                          type="number"
                          value={item.children}
                          min="0"
                          onChange={(e) =>
                            updateCartItem(item.id, {
                              children: Number(e.target.value),
                              total:
                                item.adults * item.priceAdult +
                                Number(e.target.value) * item.priceChild +
                                item.babies * item.priceBaby,
                            })
                          }
                        />
                      </div>
                      <div className="flex gap-1 text-base">
                        <span>{item.children}</span>
                        <span className="text-primary">
                          {selectedItems.includes(item.id)
                            ? `x ${item.priceChild.toLocaleString()}`
                            : ""}
                        </span>
                      </div>
                    </div>

                    {/* Em bé */}
                    <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                      <div className="flex items-center">
                        <span className="min-w-[100px]">Em bé</span>
                        <input
                          className="w-12 font-medium border-b border-[#ddd] focus:outline-none"
                          type="number"
                          value={item.babies}
                          min="0"
                          onChange={(e) =>
                            updateCartItem(item.id, {
                              babies: Number(e.target.value),
                              total:
                                item.adults * item.priceAdult +
                                item.children * item.priceChild +
                                Number(e.target.value) * item.priceBaby,
                            })
                          }
                        />
                      </div>
                      <div className="flex gap-1 text-base">
                        <span>{item.babies}</span>
                        <span className="text-primary">
                          {selectedItems.includes(item.id)
                            ? `x ${item.priceBaby.toLocaleString()}`
                            : ""}
                        </span>
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
                          className="w-12 font-medium border-b border-[#ddd] focus:outline-none"
                          type="number"
                          value={item.adults}
                          min="0"
                          onChange={(e) =>
                            updateCartItem(item.id, {
                              adults: Number(e.target.value),
                              total:
                                Number(e.target.value) * item.priceAdult +
                                item.children * item.priceChild +
                                item.babies * item.priceBaby,
                            })
                          }
                        />
                      </div>
                      <div className="flex gap-1 text-base">
                        <span>{item.adults}</span>
                        <span className="text-primary">
                          {selectedItems.includes(item.id)
                            ? `x ${item.priceAdult.toLocaleString()}`
                            : ""}
                        </span>
                      </div>
                    </div>

                    {/* Trẻ em */}
                    <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                      <div className="flex items-center">
                        <span className="min-w-[100px]">Trẻ em</span>
                        <input
                          className="w-12 font-medium border-b border-[#ddd] focus:outline-none"
                          type="number"
                          value={item.children}
                          min="0"
                          onChange={(e) =>
                            updateCartItem(item.id, {
                              children: Number(e.target.value),
                              total:
                                item.adults * item.priceAdult +
                                Number(e.target.value) * item.priceChild +
                                item.babies * item.priceBaby,
                            })
                          }
                        />
                      </div>
                      <div className="flex gap-1 text-base">
                        <span>{item.children}</span>
                        <span className="text-primary">
                          {selectedItems.includes(item.id)
                            ? `x ${item.priceChild.toLocaleString()}`
                            : ""}
                        </span>
                      </div>
                    </div>

                    {/* Em bé */}
                    <div className="flex justify-between items-center gap-2 hover:bg-gray-50 p-1 rounded">
                      <div className="flex items-center">
                        <span className="min-w-[100px]">Em bé</span>
                        <input
                          className="w-12 font-medium border-b border-[#ddd] focus:outline-none"
                          type="number"
                          value={item.babies}
                          min="0"
                          onChange={(e) =>
                            updateCartItem(item.id, {
                              babies: Number(e.target.value),
                              total:
                                item.adults * item.priceAdult +
                                item.children * item.priceChild +
                                Number(e.target.value) * item.priceBaby,
                            })
                          }
                        />
                      </div>
                      <div className="flex gap-1 text-base">
                        <span>{item.babies}</span>
                        <span className="text-primary">
                          {selectedItems.includes(item.id)
                            ? `x ${item.priceBaby.toLocaleString()}`
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Tổng kết */}
        {cart.length > 0 && selectedItems.length > 0 && (
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
              <span className="text-base">
                {selectedTotal.toLocaleString()} đ
              </span>
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
                {selectedTotal.toLocaleString()} đ
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="py-5 px-[15px] shadow-[0px_1.75px_3.51px_0px_#0000001F]">
        <h3 className="text-base lg:text-xl text-primary font-semibold mb-6">
          Thông tin khách hàng
        </h3>
        <div className="mb-[15px]">
          <input
            className="py-[14px] px-5 w-full border border-[#E0E0E0] rounded-md font-normal text-[14px] outline-none "
            type="text"
            placeholder="Họ và tên"
          />
        </div>
        <div className="mb-[15px]">
          <input
            className="py-[14px] px-5 w-full border border-[#E0E0E0] rounded-md font-normal text-[14px] outline-none "
            type="text"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="mb-[15px]">
          <textarea
            className="py-[14px] px-5 w-full border border-[#E0E0E0] rounded-md font-normal text-[14px] outline-none h-[100px] "
            placeholder="Ghi chú"
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
          </div>
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
