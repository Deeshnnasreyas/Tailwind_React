import { HERO_CONTENT } from "../constants/index";
const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col items-center my-20">
        <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
          {HERO_CONTENT.title}
        </h1>
        <p className="text-sm lg:mt-6 mb-4 tracking-tighter">
          {HERO_CONTENT.subtitle}
        </p>
        <img
          src={HERO_CONTENT.image}
          alt="hero"
          className="rounded-2xl w-full h-[65vh] p-2 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
