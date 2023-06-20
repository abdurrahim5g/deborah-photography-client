import { useState } from "react";
import "./MyReviews.css";
import Title from "../../components/Title/Title";
import { useEffect } from "react";
import { useAuthContex } from "../../Contex/AuthProvider";
import ReviewSingle from "../../components/ReviewSingle/ReviewSingle";
import { toast } from "react-hot-toast";

const MyReviews = () => {
  const { user } = useAuthContex();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/review?clientEmail=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        // console.log(data);
      });
  }, [user]);

  // delete review
  const handleDeleteReview = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged && data.deletedCount === 1) {
          const remainingReviews = reviews.filter(
            (review) => review._id !== id
          );
          setReviews(remainingReviews);
          toast.success("Review deleted successfuly");
        } else {
          toast.error("Review can't exist");
        }
      });
  };

  return (
    <section
      className="others-info py-12 md:py-20"
      style={{ background: "var(--bg-color)" }}
    >
      <div className="site-container">
        <div className="row">
          <Title subtitle={"My "}>Reviews</Title>
        </div>

        <div className="row mt-10 grid gap-8">
          {reviews?.map((review) => (
            <ReviewSingle
              key={review._id}
              review={review}
              handleDeleteReview={handleDeleteReview}
            ></ReviewSingle>
          ))}
          {reviews?.length === 0 && (
            <h2 className="text-center font-semibold text-2xl text-gray-700">
              No review available
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyReviews;
