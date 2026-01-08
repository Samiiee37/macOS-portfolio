import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

//constantstyles
const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, base: 100 },
  title: { min: 400, max: 900, base: 400 },
};

//helperfunction
const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setupTextHover = (container, type) => {
  if (!container) return;

  const letters = container.querySelectorAll("span");
  const { min, max, base } = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const mouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      const { left, width } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (left + width) / 2);
      const intensity = Math.exp(-(distance ** 2) / 2000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  container.addEventListener("mousemove", mouseMove);
};



const Welcome = () => {
  //references
  const titleRef = React.useRef(null);
  const subtitleRef = React.useRef(null);

  //gasprefs
  useGSAP(()=> {
    setupTextHover(titleRef.current, "title");
    setupTextHover(subtitleRef.current, "subtitle");
  }, [])
  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey I'am Samar! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl italic font-georama", 400)}
      </h1>
      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
