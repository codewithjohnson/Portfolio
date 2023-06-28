import { useEffect, useRef } from "react";

const useSmoothScroll = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = mainRef.current;

    if (!main) return;

    let sx = 0;
    let sy = 0;
    let dx = sx;
    let dy = sy;

    const footerRef = document.querySelector("#footer");
    const footerHeight = footerRef ? footerRef.clientHeight : 0;

    document.body.style.height = `${main.clientHeight + footerHeight}px`; // Account for footer height
    main.style.position = "fixed";
    main.style.top = "0";
    main.style.left = "0";
    main.style.willChange = "transform";

    const scroll = () => {
      sx = window.scrollX;
      sy = window.scrollY;
    };

    const render = () => {
      dx = lerp(dx, sx, 0.07);
      dy = lerp(dy, sy, 0.07);
      dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;

      main.style.transform = `translate(-${dx}px, -${dy}px)`;

      window.requestAnimationFrame(render);
    };

    const lerp = (a: number, b: number, n: number) => {
      return (1 - n) * a + n * b;
    };

    window.addEventListener("scroll", scroll);
    window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return mainRef;
};

export default useSmoothScroll;
