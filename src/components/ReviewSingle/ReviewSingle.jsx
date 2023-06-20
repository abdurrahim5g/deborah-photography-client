import { FaStar } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ReviewSingle = ({ review }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, clientImage, clientName, rating, reviewText, serviceId } =
    review;
  const location = useLocation();
  const isMyReview = () => {
    if (location.pathname === "/my-reviews") {
      return true;
    }
    return false;
  };

  return (
    <article key={_id} className="single-review">
      <div className="flex items-center mb-2 space-x-4">
        <img
          className="w-10 h-10 rounded-full object-cover border-yellow-400 shadow-lg border-2"
          src={clientImage}
          alt={clientName}
        />
        <div className="space-y-1 font-medium dark:text-white">
          <p>{clientName} </p>
        </div>
      </div>
      <div className="pl-14">
        <div className="flex items-center mb-1 gap-1">
          {[...Array(parseInt(rating)).keys()].map((key) => (
            <FaStar key={key} className="text-yellow-500" />
          ))}
          {[...Array(parseInt(5 - rating)).keys()].map((key) => (
            <FaStar key={key} className="text-gray-400" />
          ))}
        </div>

        {
          // eslint-disable-next-line react/prop-types
          reviewText.split("\n").map((single, index) => (
            <p key={index} className="mt-4">
              {single}
            </p>
          ))
        }
        {isMyReview() && (
          <Link className="text-blue-500 mt-4" to={`/services/${serviceId}`}>
            Go to this service
          </Link>
        )}
      </div>
    </article>
  );
};

export default ReviewSingle;
