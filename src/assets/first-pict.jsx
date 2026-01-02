import devPicture from '../assets/images/dev.picture.jpg';
import { useEffect } from "react";
import "../index.css";

export default function Hero() {
  useEffect(() => {
    const pic = document.querySelector(".image-dev img");
    if (!pic) return;

      const reset = () => {
      pic.style.transform = "rotateX(0deg) rotateY(0deg)";
    };  

    const handleMove = (e) => {
      const rect = pic.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midX = rect.width / 2;
      const midY = rect.height / 2;

      const rotateY = ((x - midX) / midX) * 10;
      const rotateX = ((midY - y) / midY) * 10;

      pic.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    pic.addEventListener("mousemove", handleMove);
    pic.addEventListener("mouseleave", reset);
    

    return () => {
      pic.removeEventListener("mousemove", handleMove);
      pic.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (

      <div className="image-dev">
        <div className="img-wrapper">
        <img src={devPicture} alt="developer"/>
        </div>
        </div>
  );
}
