import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";

function DefaultLayout({ children }) {
  return (
    <>
      <div className="hidden md:block">
        <TopHeader />
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
