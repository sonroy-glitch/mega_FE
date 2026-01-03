import { Link } from "react-router-dom";

import serviceImg1 from "../assets/services/img1.png";
import serviceImg2 from "../assets/services/img2.png";
import serviceImg3 from "../assets/services/img3.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Components",
      image: serviceImg1,
      link: "/components",
    },
    {
      id: 2,
      title: "Custom Projects",
      image: serviceImg2,
      link: "/custom-projects",
    },
    {
      id: 3,
      title: "Custom Lithium Ion Battery Pack",
      image: serviceImg3,
      link: "/battery-packs",
    },
  ];

  return (
    <div className="w-full max-w-10xl mx-auto px-6 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link to={service.link} key={service.id} className="group block">
              <div className="flex flex-col h-full">
                <div className="h-64 md:h-80 w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-400 group-hover:-translate-y-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full md:w-1/4 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight text-white">
            OUR <br />
            <span className="text-6xl" style={{ color: "rgb(230, 253, 136)" }}>
              SERVICES
            </span>
          </h2>
          <div className="w-16 h-1 bg-gray-300 mt-6 mx-auto md:mx-0 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
