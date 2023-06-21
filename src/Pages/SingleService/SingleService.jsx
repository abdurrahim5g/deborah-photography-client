import { Link, useLoaderData } from "react-router-dom";
import "./SingleService.css";
import Title from "../../components/Title/Title";
import { FaClock, FaDollarSign, FaUser } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useEffect, useState } from "react";
import ReviewSingle from "../../components/ReviewSingle/ReviewSingle";

const SingleService = () => {
  const service = useLoaderData();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch(
      `https://photography-server-f-rahim.vercel.app/review?serviceId=${service._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, [service]);

  // console.log(service);
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {service?.title}
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              {service?.desc?.slice(0, 150)}...
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to={`/review/${service._id}`}
                className="block w-2/4 mx-auto rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-center"
              >
                Leave a Review
              </Link>
            </div>
          </div>
        </div>

        <PhotoProvider>
          <PhotoView src={service.image}>
            <img
              alt="Student"
              src={service.image}
              className="h-56 w-full object-cover sm:h-full cursor-pointer"
            />
          </PhotoView>
        </PhotoProvider>
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
                  <FaClock />
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
                  <FaDollarSign />
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

          <div className="row mt-10 grid gap-8">
            {reviews?.map((review) => (
              <ReviewSingle key={review._id} review={review}></ReviewSingle>
            ))}
            {reviews?.length === 0 && (
              <h2 className="text-center font-semibold text-2xl text-gray-700">
                No review available
              </h2>
            )}
          </div>

          <hr className="border-b-1 border-gray-300 mt-8" />

          <div className="row mt-10">
            <div className="mt-4 md:mt-8">
              <Link
                className="block w-2/4 mx-auto rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-center"
                to={`/review/${service._id}`}
              >
                Leave a Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleService;
