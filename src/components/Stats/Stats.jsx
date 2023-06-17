import "./Stats.css";
import CountUp from "react-countup";
import Title from "../Title/Title";

const Stats = () => {
  const testimonials = [
    { id: 1, count: 500, text: "Happy Customer" },
    { id: 2, count: 1200, text: "Sucessfull events" },
    { id: 3, count: 25, text: "Active Projects" },
    { id: 4, count: 7, text: "Years of experiance" },
  ];

  return (
    <section className="stats-section py-12 md:py-20">
      <div className="site-container">
        <div className="row">
          <Title>Stats</Title>
        </div>

        <div className="row stats-counter-section shadow-lg rounded-lg border bg-white p-10 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {testimonials?.map((testimonial) => (
              <div className="col" key={testimonial.id}>
                <div className="single-counter text-center">
                  <CountUp
                    end={testimonial.count}
                    duration={2}
                    enableScrollSpy
                    suffix="+"
                    separator=","
                    className="text-4xl font-bold text-yellow-600 "
                  ></CountUp>
                  <h5 className="font-semibold mt-2">{testimonial.text}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
