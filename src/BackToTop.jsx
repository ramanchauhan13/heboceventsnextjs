'use client'
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // or use your preferred icon set

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed cursor-pointer bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-white backdrop-blur-xl p-3 rounded-full shadow-lg transition duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
}
