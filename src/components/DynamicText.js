import React, { useEffect } from "react";

const DynamicText = () => {
  let array = ["Html", "css", "JavaSript", "React","Laravel"];
  // tableau des compétences
  let wordIndex = 0;
  //On débute notre parcours lettre par lettre(1er)
  let letterIndex = 0;
  //enumère les lettres
// Hooks Useffect
  useEffect(() => {
    const target = document.getElementById("text-target");

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = "0";
      letter.style.animation = "anim 10s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          wordIndex = 0;
          letterIndex = 0;
          loop();
        } else if (letterIndex < array[wordIndex].length) {
          createLetter();
          letterIndex++;
          loop();
        } else {
          letterIndex = 0;
          wordIndex++;
          setTimeout(() => {
            loop();
          }, 2000);
        }
      }, 80);
    };
    loop();
  }, []);

  return (
    <span className="dynamic-text">
      <span className="simply"> Web Dev</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DynamicText;
