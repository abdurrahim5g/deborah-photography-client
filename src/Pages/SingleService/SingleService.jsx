import { Link, useLoaderData } from "react-router-dom";
import "./SingleService.css";
import Title from "../../components/Title/Title";
import { FaStar, FaTimes, FaUser } from "react-icons/fa";

const SingleService = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {service?.title}
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              {service?.desc.slice(0, 150)}...
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to={`/services/${0}`}
                className="block w-2/4 mx-auto rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-center"
              >
                Leave a Rating
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>

      <section className="others-info py-12 md:py-20">
        <div className="site-container">
          <div className="row">
            <Title subtitle={"Others"}>Information</Title>
          </div>

          <div className="row mt-10">
            <div className="w-full  mx-auto grid gap-8 grid-cols-3">
              <article className="flex shadow items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
                <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <FaTimes />
                </span>
                <div>
                  <p className="text-2xl font-medium text-gray-900">
                    {service?.duration}
                  </p>
                  <p className="text-sm text-gray-500">Duration</p>
                </div>
              </article>

              <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
                <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <FaTimes />
                </span>
                <div>
                  <p className="text-2xl font-medium text-gray-900">
                    {service?.price}
                  </p>
                  <p className="text-sm text-gray-500">Price</p>
                </div>
              </article>

              <article className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6">
                <span className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <FaUser />
                </span>
                <div>
                  <p className="text-2xl font-medium text-gray-900">
                    {service?.contact?.name}
                  </p>
                  <p className="text-sm text-gray-500">Photographer</p>
                </div>
              </article>
            </div>

            <div className="description">
              <p className="mt-10">{service.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="others-info py-12 md:py-20"
        style={{ background: "var(--bg-color)" }}
      >
        <div className="site-container">
          <div className="row">
            <Title subtitle={"Service"}>Review</Title>
          </div>

          <div className="row mt-10">
            <article>
              <div className="flex items-center mb-4 space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/docs/images/people/profile-picture-5.jpg"
                  alt=""
                />
                <div className="space-y-1 font-medium dark:text-white">
                  <p>
                    Jese Leos{" "}
                    <time
                      dateTime="2014-08-16 19:00"
                      className="block text-sm text-gray-500 dark:text-gray-400"
                    >
                      Joined on August 2014
                    </time>
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Thinking to buy another one!
                </h3>
              </div>
              <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  Reviewed in the United Kingdom on{" "}
                  <time dateTime="2017-03-03 19:00">March 3, 2017</time>
                </p>
              </footer>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                This is my third Invicta Pro Diver. They are just fantastic
                value for money. This one arrived yesterday and the first thing
                I did was set the time, popped on an identical strap from
                another Invicta and went in the shower with it to test the
                waterproofing.... No problems.
              </p>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                It is obviously not the same build quality as those very
                expensive watches. But that is like comparing a Citroën to a
                Ferrari. This watch was well under £100! An absolute bargain.
              </p>
            </article>
          </div>

          <hr className="border-2 border-blue-500 mt-8" />

          <div className="row mt-10">
            <p className="mb-5">
              <strong>Total: </strong> 9 Reviews
            </p>
            <form action="#">
              <div>
                <label
                  htmlFor="HeadlineAct"
                  className="block text-sm font-medium text-gray-900"
                >
                  Rating
                </label>

                <select
                  name="HeadlineAct"
                  id="HeadlineAct"
                  className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm p-3 mb-4"
                >
                  <option value="">Please select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div>
                <label className="" htmlFor="message">
                  Review Text
                </label>

                <textarea
                  className="w-full rounded-lg shadow-lg p-3 px-5 text-sm focus:outline-blue-500"
                  placeholder="Message"
                  rows="3"
                  id="message"
                ></textarea>
              </div>
              <button className="block mt-3 rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-center">
                Submit review
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleService;
