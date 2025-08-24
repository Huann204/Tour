import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <div className="hidden md:block">
        <TopHeader />
      </div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
