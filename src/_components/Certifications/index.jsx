"use client";
import { useState, useEffect } from "react";
import CertificationCard from "@/_components/Certifications/CertificationCard";
import PaginationButton from "../PaginationButton";
import certificates from "@/_data/certificates";

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [certificatesPerPage, setCertificatesPerPage] = useState(6);

  useEffect(() => {
    const updateCertificatesPerPage = () => {
      if (window.innerWidth < 768) {
        setCertificatesPerPage(3);
      } else if (window.innerWidth < 1024) {
        setCertificatesPerPage(4);
      } else {
        setCertificatesPerPage(6);
      }
    };

    updateCertificatesPerPage();
    window.addEventListener("resize", updateCertificatesPerPage);

    return () => {
      window.removeEventListener("resize", updateCertificatesPerPage);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex(currentIndex + certificatesPerPage);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - certificatesPerPage);
  };

  const isNextDisabled =
    currentIndex + certificatesPerPage >= certificates.length;
  const isPrevDisabled = currentIndex === 0;

  return (
    <section
      className="section-padding-x pt-16 pb-16 normal-font-size text-dark-base bg-light-base flex items-center justify-center"
      id="certificates"
    >
      <div className="max-w-screen-xl container">
        <div className="flex justify-between items-center mb-4">
          <h2 className="title-font-size font-semibold">Certifications</h2>
          <PaginationButton
            handlePrev={handlePrev}
            handleNext={handleNext}
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
          />
        </div>
        <div className="flex items-center gap-2 mb-2 lg:mb-4 flex-wrap">
          <button
            type="button"
            className="bg-dark-base text-light-base px-2 py-1"
            onClick={() => handleCategoryChange("committee")}
          >
            Committee
          </button>
          <button
            type="button"
            className="bg-dark-base text-light-base px-2 py-1"
            onClick={() => handleCategoryChange("course")}
          >
            Course
          </button>
          <button
            type="button"
            className="bg-dark-base text-light-base px-2 py-1"
            onClick={() => handleCategoryChange("organization")}
          >
            Organization
          </button>
          <button
            type="button"
            className="bg-dark-base text-light-base px-2 py-1"
            onClick={() => handleCategoryChange("work")}
          >
            Work
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {certificates
            .slice(currentIndex, currentIndex + certificatesPerPage)
            .map((certificate) => (
              <CertificationCard
                certificate={certificate}
                key={certificate.id}
                currentIndex={currentIndex}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
