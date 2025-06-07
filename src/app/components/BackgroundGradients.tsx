"use client";
import { useEffect, useState } from "react";

export default function BackgroundGradients() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // You can use scrollY to animate position, opacity, etc.
  return (
    <>
      {/* Top Left Gradient */}
      <div
        className="pointer-events-none fixed top-[-150px] left-[-150px] w-[600px] h-[600px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle at 30% 30%, #a78bfa55 0%, transparent 80%)",
          filter: "blur(100px)",
          transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.05}px) scale(1.1)`,
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      {/* Top Right Gradient */}
      <div
        className="pointer-events-none fixed top-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle at 70% 30%, #7c3aed44 0%, transparent 80%)",
          filter: "blur(100px)",
          transform: `translateY(${scrollY * 0.18}px) translateX(${-scrollY * 0.05}px) scale(1.1)`,
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      {/* Bottom Center Gradient */}
      <div
        className="pointer-events-none fixed bottom-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle at 50% 80%, #5b21b655 0%, transparent 90%)",
          filter: "blur(120px)",
          transform: `translateY(${-scrollY * 0.12}px) scale(1.05)`,
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </>
  );
}
