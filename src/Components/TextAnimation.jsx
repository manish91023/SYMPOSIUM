import { useEffect } from "react";
import gsap from "gsap";


const letters = ["C", "O", "M", "P", "U", "T", "E", "R", " ", "S", "C", "I", "E", "N", "C", "E", " ", "A", "N", "D", " ", "E", "N", "G", "I", "N", "E", "E", "R", "I", "N", "G"];

const TextAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    const letterElements = document.querySelectorAll(".letter");

    gsap.set(letterElements, {
      opacity: 0,
      scale: 0,
      rotationX: -90,
    });

    tl.to(letterElements, {
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 1,
      stagger: { each: 0.1, ease: "back.out(1.7)" },
    })
      .to(letterElements, {
        duration: 0.1,
        skewX: 20,
        ease: "power4.inOut",
        stagger: { each: 0.05, from: "random" },
      })
      .to(letterElements, {
        duration: 0.1,
        skewX: 0,
        ease: "power4.inOut",
      })
      .to(letterElements, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        rotationX: 90,
        stagger: { each: 0.1, from: "end", ease: "back.in(1.7)" },
      });

    letterElements.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          scale: 1.2,
          color: "#fff",
          duration: 0.3,
          ease: "power2.out",
        });
      });
      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          scale: 1,
          color: "transparent",
          duration: 0.3,
          ease: "power2.in",
        });
      });
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex gap-4">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="letter text-[6rem] font-black relative text-transparent stroke-2 stroke-white"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextAnimation;
