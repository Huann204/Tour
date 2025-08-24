import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

// Tạo Context
const CartContext = createContext();

// Hook
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Lấy từ localStorage khi reload
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Lưu vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Thêm vào giỏ hàng
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((tour) => tour.id === item.id);
      if (exists) {
        // Nếu đã có tour → cộng dồn số lượng
        return prev.map((tour) =>
          tour.id === item.id
            ? {
                ...tour,
                adults: tour.adults + item.adults,
                children: tour.children + item.children,
                babies: tour.babies + item.babies,
                total: tour.total + item.total,
              }
            : tour
        );
      }
      return [...prev, item];
    });
  };

  // Xóa 1 tour khỏi giỏ
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.info("Đã xóa khỏi giỏ hàng");
  };

  // Cập nhật số lượng
  const updateCartItem = (id, newData) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...newData } : item))
    );
  };

  // Tính tổng tiền toàn giỏ
  const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItem, grandTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
