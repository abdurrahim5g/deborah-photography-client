import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
  // eslint-disable-next-line react/prop-types
  const { title, desc, thumbnail, image, price, duration, _id } = service;

  return (
    <div className="service-card">
      <div className="group  shadow-md relative block overflow-hidden rounded-xl">
        <PhotoProvider>
          <PhotoView src={image}>
            <img
              src={thumbnail}
              alt=""
              className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
          </PhotoView>
        </PhotoProvider>

        <div className="relative border border-gray-100 bg-white p-6">
          {/* <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
            New
          </span> */}

          <h3 className="mb-3 text-lg font-medium text-gray-900">{title}</h3>

          <p className="mt-1.5 text-sm text-gray-700">
            <strong>Price: </strong>
            {price}
          </p>
          <p className="mt-1.5 text-sm text-gray-700">
            <strong>Duration: </strong>
            {duration}
          </p>

          <p className="mt-1.5 text-sm text-gray-700">
            <strong>Description: </strong>
            {
              // eslint-disable-next-line react/prop-types
              desc.slice(0, 100)
            }
            ...
          </p>

          <form className="mt-4">
            <Link
              to={`/services/${_id}`}
              className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-center"
            >
              Learn More
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
