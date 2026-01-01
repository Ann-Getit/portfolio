// useScrollFade.js
import { useEffect } from "react";

const useScrollFade = (selector) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-active");
          } else {
            entry.target.classList.remove("fade-in-active");
          }
        });
      },
      { threshold: 0.1 } // animatie start als 10% zichtbaar is
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, [selector]);
};

export default useScrollFade;
