import { SERVICES_CONTENT } from "../constants/index";
const Service = () => {
  return (
    <section className="mx-w-7xl mx-auto p-2" id="services">
      <div className="my-20">
        <h2 className="text-xl lg:text-2xl tracking-tight text-center uppercase mb-20">
          Our Home Renovation Service
        </h2>
        {SERVICES_CONTENT.map((service, index) => (
          <div className="mb-12 flex flex-col lg:flex-row" key={index}>
            <div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}
            >
              <img
                src={service.image}
                width={150}
                height={20}
                alt="service"
                className="w-full h-auto object-cover rounded-lg items-center"
              />
            </div>
            <div
              className={`lg:w-1/2 fles flex-col ${
                index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
              }`}
            >
              <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {service.title}
              </h3>
              <p className="mb-4 lg:leading-wide text-lg lg:text-xl lg:leading-9">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
