export default function certificateCard({ certificate, currentIndex }) {
  return (
    <div
      key={certificate.id}
      className="bg-light-base shadow-md p-4 flex flex-col gap-2"
    >
      <img
        src={certificate.certificate}
        alt={`${certificate.position} of ${certificate.event} at ${certificate.organization} in ${certificate.date}`}
        className="w-full h-48 object-cover"
      />
      <h3 className="font-semibold subtitle-font-size">
        {certificate.position}
      </h3>
      <p className="hidden">{certificate.category}</p>
      <p className="w-fit"><span className="bg-blue-base text-light-base px-1">{certificate.organization}</span> | <span>{certificate.date}</span></p>
      <p className="">{certificate.description}</p>
    </div>
  );
}
