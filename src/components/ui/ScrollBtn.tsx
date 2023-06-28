import React, { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi2";

const ScrollToTopBtn = () => {
  const [showScroll, setShowScroll] = useState(true);

  const isWindow = () => typeof window !== "undefined";

  // scroll to top
  const scrollTop = () => {
    if (!isWindow()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // check if window is defined
  // add event listener to window
  // remove event listener from window

  useEffect(() => {
    const checkScrollTop = () => {
      if (!isWindow()) return;
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollTop}
      className={`${
        showScroll
          ? "fixed bottom-4 right-5 bg-black/40 p-1 sm:p-2 text-white rounded-md z-50"
          : "hidden"
      }`}
    >
      <HiChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopBtn;
