import { Link, useLoaderData } from "react-router-dom";
import Title from "../Title/Title";
import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <section className="services-section py-12 md:py-20">
      <div className="site-container">
        <div className="row">
          <Title>Services</Title>
        </div>

        <div className="row my-10">
          <div className="services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services?.map((service) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                ></ServiceCard>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="view-all-buttons text-center">
            <Link
              to="/services/"
              className="inline-block  rounded bg-yellow-400 p-4 px-10 text-sm font-medium transition hover:scale-105 text-center"
            >
              View all services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
