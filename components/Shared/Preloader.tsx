"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        document.body.style.overflow = "visible";
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-nu30">
      <div className="loader relative w-[96px] h-[96px] rotate-45">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="loader-square absolute top-0 left-0 w-[28px] h-[28px] m-[2px] bg-[#ffc700]"
            style={{
              animation: "square-animation 10s ease-in-out infinite both",
              animationDelay: `-${(10 / 7) * index}s`,
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default Preloader;
