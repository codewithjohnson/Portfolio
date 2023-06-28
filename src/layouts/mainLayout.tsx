import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
import ScrollTop from "../components/ui/scrollTop";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative main-layout">
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <div className="hidden xl:block">
        <ScrollTop />
      </div>
    </div>
  );
};

export default MainLayout;
