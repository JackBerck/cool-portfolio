export default function ExperienceCard({ experience, currentIndex }) {
  return (
    <>
      <div
        className="bg-cover bg-center text-light-base min-h-[360px] flex flex-col justify-end p-4 relative transition duration-300"
        style={{
          backgroundImage: `url(${experience.image})`,
          transform: `translateX(-${currentIndex}%)`,
        }}
      >
        <div className="relative z-10">
          <p className="w-fit font-medium">
            <span className="bg-cyan-600 py-1 px-3">{experience.title}</span>{" "}
            <span className="py-1 px-3">| {experience.date}</span>
          </p>
          <h3 className="font-medium card-title-font-size">
            {experience.company}
          </h3>
          <p className="mb-2">{experience.description}</p>
          <button
            type="button"
            className="bg-blue-base text-light-base px-2 py-1"
          >
            See Summary
          </button>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-dark-base/50"></div>
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <img
            src={experience.logo}
            alt={`${experience.company} Logo`}
            className="w-10"
          />
        </div>
      </div>
    </>
  );
}
