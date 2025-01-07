"use client";
import { useState, useEffect } from "react";
import ExperienceCard from "@/_components/Experiences/ExperienceCard";
import experiences from "@/_data/experiences";
import PaginationButton from "../PaginationButton";

export default function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [experiencesPerPage, setExperiencesPerPage] = useState(6);

  useEffect(() => {
    const updateExperiencesPerPage = () => {
      if (window.innerWidth < 768) {
        setExperiencesPerPage(3);
      } else if (window.innerWidth < 1024) {
        setExperiencesPerPage(4);
      } else {
        setExperiencesPerPage(6);
      }
    };

    updateExperiencesPerPage();
    window.addEventListener("resize", updateExperiencesPerPage);

    return () => {
      window.removeEventListener("resize", updateExperiencesPerPage);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex(currentIndex + experiencesPerPage);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - experiencesPerPage);
  };

  const isNextDisabled =
    currentIndex + experiencesPerPage >= experiences.length;
  const isPrevDisabled = currentIndex === 0;

  return (
    <section
      className="section-padding-x pt-16 pb-16 normal-font-size text-dark-base bg-light-base flex items-center justify-center"
      id="experiences"
    >
      <div className="max-w-screen-xl container">
        <div className="flex justify-between items-center mb-4">
          <h2 className="title-font-size font-semibold">Experiences</h2>
          <PaginationButton
            handlePrev={handlePrev}
            handleNext={handleNext}
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {experiences
            .slice(currentIndex, currentIndex + experiencesPerPage)
            .map((experience) => (
              <ExperienceCard
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
