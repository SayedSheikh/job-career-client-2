import React from "react";
import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer";
import ScrollToTop from "../../Components/ScrollToTop";

const MaiLayout = () => {
  return (
    <div className="max-w-[1500px] mx-auto w-11/12">
      <ScrollToTop />
      <Navbar />
      <div className="min-h-[calc(100vh-65px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MaiLayout;
