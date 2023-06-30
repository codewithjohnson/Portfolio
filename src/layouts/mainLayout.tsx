import React, { useRef } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import ScrollTop from "../components/ui/scrollTop";
import ScrollToTopBtn from "../components/ui/ScrollBtn";
import ParticleBg from "../components/particles/ParticleBg";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="home" className="relative main-layout">
    
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <div className="hidden xl:block">
        <ScrollTop />
      </div>
      <ScrollToTopBtn />
    </div>
  );
};

export default MainLayout;
