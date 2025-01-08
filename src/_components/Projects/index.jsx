"use client";
import { useState, useEffect } from "react";
import projects from "@/_data/projects";
import ProjectCard from "./ProjectCard";
import PaginationButton from "../PaginationButton";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth < 768) {
        setProjectsPerPage(3);
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(4);
      } else {
        setProjectsPerPage(6);
      }
    };

    updateProjectsPerPage();
    window.addEventListener("resize", updateProjectsPerPage);

    return () => {
      window.removeEventListener("resize", updateProjectsPerPage);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex(currentIndex + projectsPerPage);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - projectsPerPage);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const isNextDisabled =
    currentIndex + projectsPerPage >= filteredProjects.length;
  const isPrevDisabled = currentIndex === 0;

  return (
    <section
      id="projects"
      className="scroll-m-16 section-padding-x pt-8 pb-8 normal-font-size text-dark-base bg-light-base flex items-center justify-center"
    >
      <div className="max-w-screen-xl container">
        <div className="flex justify-between items-center mb-2 lg:mb-4">
          <h2 className="title-font-size font-semibold">Projects</h2>
          <PaginationButton
            handleNext={handleNext}
            handlePrev={handlePrev}
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
          />
        </div>
        <div className="flex items-center gap-2 mb-2 lg:mb-4 flex-wrap">
          <button
            type="button"
            className="bg-dark-base text-light-base px-2 py-1"
            onClick={() => handleCategoryChange("web")}
          >
            Web Development
          </button>
          <button
            type="button"
            className="bg-dark-base text-light-base px-2 py-1"
            onClick={() => handleCategoryChange("app")}
          >
            App Development
          </button>
          <button
            type="button"
            className="bg-dark-base text-light-base px-2 py-1"
            onClick={() => handleCategoryChange("uiux")}
          >
            UI/UX Design
          </button>
          <button
            type="button"
            className="bg-dark-base text-light-base px-2 py-1"
            onClick={() => handleCategoryChange("others")}
          >
            Others
          </button>
          <button
            type="button"
            className="bg-dark-base text-light-base px-2 py-1"
            onClick={() => handleCategoryChange("all")}
          >
            All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.length === 0 ? (
            <p className="text-center col-span-full font-semibold subtitle-font-size">
              Coming Soon
            </p>
          ) : (
            filteredProjects
              .slice(currentIndex, currentIndex + projectsPerPage)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
          )}
        </div>
      </div>
    </section>
  );
}
