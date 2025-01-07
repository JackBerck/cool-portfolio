export default function ProjectCard({ project }) {
  return (
    <div
      key={project.id}
      className="bg-light-base shadow-md p-4 flex flex-col gap-2"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <h3 className="font-semibold subtitle-font-size">{project.title}</h3>
      <p className="hidden">{project.category}</p>
      <p className="">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.techstack.map((tech) => (
          <span
            key={tech}
            className="bg-blue-base text-light-base rounded-full px-2 py-1 small-font-size"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-base underline"
      >
        Visit Project
      </a>
    </div>
  );
}
