/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";
import { FaEdit, FaStar, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const ReviewSingle = ({ review, handleDeleteReview }) => {
  const {
    _id,
    clientImage,
    clientName,
    clientEmail,
    rating,
    reviewText,
    serviceId,
  } = review;
  const location = useLocation();

  const isMyReview = () => {
    if (location.pathname === "/my-reviews") {
      return true;
    }
    return false;
  };

  return (
    <article
      key={_id}
      className="single-review relative border-1 border border-gray-400 rounded-lg py-4 px-6"
    >
      <div className="flex items-center mb-2 space-x-4">
        <img
          className="w-10 h-10 rounded-full object-cover border-yellow-400 shadow-lg border-2"
          src={clientImage}
          alt={clientName}
        />
        <div className="space-y-1 dark:text-white">
          <p className="font-bold mb-0">{clientName} </p>
          <p className="mt-0">
            <strong>Email: </strong>
            {clientEmail}
          </p>
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

        {reviewText.split("\n").map((single, index) => (
          <p key={index} className="mt-4">
            {single}
          </p>
        ))}
        {isMyReview() && (
          <>
            <Link className="text-blue-500 mt-4" to={`/services/${serviceId}`}>
              Go to this service
            </Link>

            <div className="absolute text-2xl flex gap-6 top-4 right-4">
              <Link to={`edit/${_id}`} className="text-green-500" title="Edit">
                <FaEdit />
              </Link>
              <button
                className="text-red-600"
                title="Delete"
                onClick={() =>
                  toast((t) => (
                    <div>
                      <p className="font-semibold mb-6 text-lg">
                        Are you sure you want to delete this review?
                      </p>
                      <div className="flex justify-end gap-6">
                        <button
                          className="capitalize py-2 px-6 text-white rounded bg-green-500"
                          onClick={() => toast.dismiss(t.id)}
                        >
                          no
                        </button>
                        <button
                          className="capitalize py-2 px-6 text-white rounded bg-red-500"
                          onClick={() => {
                            handleDeleteReview(_id);
                            toast.dismiss(t.id);
                          }}
                        >
                          yes
                        </button>
                      </div>
                    </div>
                  ))
                }
              >
                <FaTrashAlt />
              </button>
            </div>
          </>
        )}
      </div>
    </article>
  );
};

export default ReviewSingle;
