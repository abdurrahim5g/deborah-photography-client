import { useLoaderData } from "react-router-dom";
import "./ReviewPage.css";
import Title from "../../components/Title/Title";
import { FaClock, FaDollarSign, FaStar, FaUser } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ReviewPage = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div className="review-form">
              <form action="#">
                <div className="single-form-item">
                  <div className="grid grid-cols-5 gap-2">
                    <div className="col">
                      <input type="radio" name="rating" id="1" />
                      <label htmlFor="1">
                        1 <FaStar />
                      </label>
                    </div>
                    <div className="col">
                      <input type="radio" name="rating" id="2" />
                      <label htmlFor="2">
                        2 <FaStar />
                      </label>
                    </div>
                    <div className="col">
                      <input type="radio" name="rating" id="3" />
                      <label htmlFor="3">
                        3 <FaStar />
                      </label>
                    </div>
                    <div className="col">
                      <input type="radio" name="rating" id="4" />
                      <label htmlFor="4">
                        4 <FaStar />
                      </label>
                    </div>
                    <div className="col">
                      <input type="radio" name="rating" id="5" />
                      <label htmlFor="5">
                        5 <FaStar />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="single-form-item">
                  <label htmlFor="ratingText">Rating text</label>
                  <textarea
                    name="ratingText"
                    id="ratingText"
                    cols="30"
                    rows="5"
                    placeholder="Rating Text"
                  ></textarea>
                </div>

                <button className="block w-2/4 mx-auto rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-center">
                  Submit
                </button>
              </form>
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
    </>
  );
};

export default ReviewPage;
