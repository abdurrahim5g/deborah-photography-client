import { useLoaderData } from "react-router-dom";
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
      </div>
    </section>
  );
};

export default Services;
