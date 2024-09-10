import aboutImage from "../assets/about.webp";
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 " id="about">
      <h2 className="text-xl lg:text-2xl uppercase text-center mb-12 mx-4 tracking-tight py-6">
        About
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          <img
            src={aboutImage}
            alt="about"
            className="w-full h-auto rounded-md"
          />
        </div>
        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui dolore
          eaque, amet laudantium corrupti natus voluptatibus nam quod culpa
          voluptates reprehenderit ipsam laboriosam recusandae minima iusto
          molestias odio eveniet nulla.
        </p>
      </div>
    </section>
  );
};

export default About;
