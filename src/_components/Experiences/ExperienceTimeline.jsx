export default function ExperienceTimeline({ experience }) {
  return (
    <li className="relative mb-6 sm:mb-0">
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-10 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
          <img
            src={experience.logo}
            alt={`${experience.company} Logo`}
            className="w-full"
          />
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
      </div>
      <div className="mt-3 sm:pe-8">
        <h3 className="font-semibold big-font-size bg-sky-500 text-light-base w-fit px-1">
          {experience.title}
        </h3>
        <p className="font-semibold">{experience.company}</p>
        <time className="block mb-2 text-sm font-normal leading-none">
          {experience.date}
        </time>
        {experience.resume && (
          <ol className="font-normal list-disc pl-5">
            {experience.resume.map((resume, index) => (
              <li key={index} className="">
                {resume}
              </li>
            ))}
          </ol>
        )}
      </div>
    </li>
  );
}
