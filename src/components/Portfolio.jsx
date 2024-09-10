import { PORTFOLIO_PROJECTS } from "../constants/index";
const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-5">
          portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_PROJECTS.map((portfolio, index) => (
            <div
              className="group relative overflow-hidden rounded-3xl mx-4"
              key={index}
            >
              <img
                src={portfolio.image}
                alt="portfolio"
                className="w-full h-auto object-cover transition-transform duration-500
                  group-hover:scale-110"
              />
              <div
                className="absolute backdrop-blur-lg inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col
              transition-opacity duration-500"
              >
                <h3 className="mb-2 text-xl font-semibold">{portfolio.name}</h3>
                <p className="mb-12 p-4">{portfolio.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
