import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    homeSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white text-3xl rounded-full shadow-lg transition duration-300"
  aria-label="Scroll to Top"
>
  ↑
</button>


    )
  );
};

export default ScrollToTopButton;
