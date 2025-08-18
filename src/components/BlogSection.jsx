import React from "react";
import Blog from "../assets/img/blog-1.jpg";
import Blog2 from "../assets/img/blog-2.jpg";
import Blog3 from "../assets/img/blog-3.jpg";
import Blog4 from "../assets/img/blog-4.jpg";
import Blog5 from "../assets/img/blog-5.jpg";

const BlogSection = (prop) => {
  return (
    <div className="mt-8 lg:mt-[60px] px-4 text-2xl lg:mx-[91px] " {...prop}>
      <h2 className="text-primary lg:text-4xl mb-6 font-bold text-center">
        Tin Tức Mới
      </h2>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 ">
        <div className="col-span-4 grid grid-cols-2 gap-3 lg:col-span-1 lg:flex lg:flex-col">
          <div className="relative ">
            <img className="rounded-xl w-full h-full " src={Blog} alt="" />
            <div className="absolute rounded-xl text-white p-[10px] flex flex-col justify-end w-full h-full bottom-0 left-0 bg-[linear-gradient(180deg,rgba(69,2,199,0)_58.85%,rgba(69,2,199,0.9)_100%)]">
              <span className="text-[10px] ">23/05/2024</span>
              <p className="text-sm line-clamp-2">
                Homestay “cổ tích” giữa Đà Lạt mộng mơ
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-xl w-full h-full  " src={Blog3} alt="" />
            <div className="absolute rounded-xl text-white p-[10px] flex flex-col justify-end w-full h-full bottom-0 left-0 bg-[linear-gradient(180deg,rgba(69,2,199,0)_58.85%,rgba(69,2,199,0.9)_100%)]">
              <span className="text-[10px] ">23/05/2024</span>
              <p className="text-sm line-clamp-2">
                Đặc sản không thể bỏ qua khi đến với Đà Nẵng – Hội An
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2">
          <div>
            <img className="rounded-xl" src={Blog2} alt="" />
          </div>
          <div className="px-[10px] pb-3">
            <span className="text-black text-xs">24/05/2025</span>
            <h2 className="line-clamp-1 text-primary text-lg">
              Top 5 điểm check in độc đáo tại Singapore
            </h2>
            <p className="line-clamp-2 text-sm">
              Nếu bạn nghĩ du lịch Singapore rất nhàm chán vì chỉ mãi quanh quẩn
              trong những khối bê tông vô cảm thì bạn “chắc chưa?”. Tuy đảo quốc
              Sư Tử không phải là một quốc gia rộng lớn nhưng các địa điểm du
              lịch tại Singapore chưa từng đánh mất sức hút đối với cộng đồng xê
              dịch quốc tế.
            </p>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-2 gap-3 lg:col-span-1 lg:flex lg:flex-col ">
          <div className="relative ">
            <img className="rounded-xl w-full h-full " src={Blog4} alt="" />
            <div className="absolute rounded-xl text-white p-[10px] flex flex-col justify-end w-full h-full bottom-0 left-0 bg-[linear-gradient(180deg,rgba(69,2,199,0)_58.85%,rgba(69,2,199,0.9)_100%)]">
              <span className="text-[10px] ">23/05/2024</span>
              <p className="text-sm line-clamp-2">
                Homestay “cổ tích” giữa Đà Lạt mộng mơ
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-xl w-full h-full  " src={Blog5} alt="" />
            <div className="absolute rounded-xl text-white p-[10px] flex flex-col justify-end w-full h-full bottom-0 left-0 bg-[linear-gradient(180deg,rgba(69,2,199,0)_58.85%,rgba(69,2,199,0.9)_100%)]">
              <span className="text-[10px] ">23/05/2024</span>
              <p className="text-sm line-clamp-2">
                Đặc sản không thể bỏ qua khi đến với Đà Nẵng – Hội An
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
