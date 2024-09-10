import { PORTFOLIO_PROJECTS } from "../constants/index";
const Portfolios = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-20">
        <h2 className="text-xl lg:text-2xl uppercase font-medium text-center mb-12">
          portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <div key={index} className="group relative ">
              <img
                src={project.image}
                alt="project"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl"
              />
                  <div className="absolute flex flex-col items-center justify-center inset-0 backdrop-blur-lg
              opacity-0 transition-opacity group-hover:opacity-100 duration-500">
                <h3 className="text-xl font-semibold ">{project.name}</h3>
                <p className="mb-5 p-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
