export default function AboutMe() {
  return (
    <section
      id="about"
      className="section-padding-x pt-8 pb-8 normal-font-size bg-dark-base flex items-center justify-center"
    >
      <div className="max-w-screen-xl container">
        <h2 className="title-font-size text-light-base font-semibold text-center mb-2 lg:mb-4">
          About Me
        </h2>
        <div className="mx-auto grid grid-cols-4 gap-4 max-w-screen-lg">
          <div className="col-span-4 md:col-span-2 bg-light-base text-dark-base p-4">
            <p className="">
              I am a software engineer with a strong passion for web
              development, specializing in creating innovative and user-friendly
              applications. With experience in technologies like JavaScript,
              React, and Node.js, I enjoy tackling complex challenges that push
              me to learn and grow. My focus is on building efficient, scalable,
              and visually appealing web solutions that make a difference.
            </p>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center bg-light-base text-dark-base p-4">
            <svg
              fill="currentColor"
              className="w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <p className="subtitle-font-size text-center font-bold">Batang</p>
            <p className="big-font-size text-center">Central Java</p>
          </div>
          <div className="col-span-4 md:col-span-1 row-span-2 hidden md:flex justify-center items-center">
            <img
              src="/img/profiles/zaki-dzulfikar.jpg"
              alt="Zaki Dzulfikar Profile"
              className="object-cover h-full"
            />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center bg-light-base text-dark-base p-4">
            <svg
              fill="currentColor"
              className="w-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
            </svg>
            <p className="big-font-size text-center font-bold">
              Jenderal Soedirman University
            </p>
            <p className="big-font-size text-center">Computer Science, 2023</p>
          </div>
          <div className="col-span-4 md:col-span-2 bg-light-base text-dark-base p-4">
            <p>
              I’m currently seeking new opportunities to collaborate on exciting
              projects with talented teams. If you're looking for a dedicated
              and creative developer to bring fresh ideas and expertise to your
              project, feel free to reach out to me at{" "}
              <a
                href="mailto:berckjack@gmail.com"
                className="text-blue-base underline"
              >
                berckjack@gmail.com
              </a>
              . Let’s create something exceptional together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
