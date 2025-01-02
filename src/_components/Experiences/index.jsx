"use client";
import { useState } from "react";
import ExperiencesCard from "@/_components/Experiences/Experiences";
import experiences from "@/_data/experiences";

export default function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + 3 < experiences.length ? prevIndex + 1 : 0
        );
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex - 3 >= 0 ? prevIndex - 1 : experiences.length - 3
        );
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section
      className="section-padding-x pt-16 pb-16 normal-font-size text-dark-base bg-light-base flex items-center justify-center"
      id="experiences"
    >
      <div className="max-w-screen-xl container">
        <div className="flex justify-between items-center mb-4">
          <h2 className="title-font-size font-semibold">Experiences</h2>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-blue-base text-light-base p-2"
              onClick={handlePrev}
              disabled={isAnimating}
            >
              <svg
                className="w-5 lg:w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button
              type="button"
              className="bg-blue-base text-light-base p-2"
              onClick={handleNext}
              disabled={isAnimating}
            >
              <svg
                className="w-5 lg:w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-4 absolute overflow-hidden">
          {experiences.slice(currentIndex, currentIndex + 3).map((experience) => (
            <ExperiencesCard
              experience={experience}
              key={experience.id}
              currentIndex={currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
