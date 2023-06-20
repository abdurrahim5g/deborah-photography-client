import { FaStar } from "react-icons/fa";
import Title from "../../components/Title/Title";
import "./EditReview.css";
// import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const EditReview = () => {
  const review = useLoaderData();
  const { rating, reviewText, _id } = review;
  const navigate = useNavigate();

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const rating = form.rating.value;
    const reviewText = form.reviewText.value;

    const updatedReview = {
      rating,
      reviewText,
    };
    // console.log(updatedReview);

    fetch(`http://localhost:5000/review/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          toast.success("Review updated successfuly 😍");
          form.reset();
          navigate(-1);
        } else {
          toast.error("Something is wrong! Please try again 🚀");
        }
      });
  };

  return (
    <section className="edit-review py-12 md:py-20">
      <div className="site-container">
        <div className="review-form">
          <form action="#" onSubmit={handleReviewSubmit}>
            <div className="single-form-item">
              <Title subtitle={"Edit "}>Review</Title>

              <div className="grid grid-cols-5 gap-2 mt-10">
                <div className="col">
                  <input
                    type="radio"
                    name="rating"
                    id="1"
                    value="1"
                    defaultChecked={rating === "1"}
                  />
                  <label htmlFor="1">
                    1 <FaStar />
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    name="rating"
                    id="2"
                    value="2"
                    defaultChecked={rating === "2"}
                  />
                  <label htmlFor="2">
                    2 <FaStar />
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    name="rating"
                    id="3"
                    value="3"
                    defaultChecked={rating === "3"}
                  />
                  <label htmlFor="3">
                    3 <FaStar />
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    name="rating"
                    id="4"
                    value="4"
                    defaultChecked={rating === "4"}
                  />
                  <label htmlFor="4">
                    4 <FaStar />
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    name="rating"
                    id="5"
                    value="5"
                    defaultChecked={rating === "5"}
                  />
                  <label htmlFor="5">
                    5 <FaStar />
                  </label>
                </div>
              </div>
            </div>

            <div className="single-form-item">
              <label htmlFor="reviewText">Rating text</label>
              <textarea
                name="reviewText"
                id="reviewText"
                cols="30"
                rows="5"
                placeholder="Rating Text"
                defaultValue={reviewText}
              ></textarea>
            </div>

            <button className="block w-2/4 mx-auto rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 text-center">
              Update Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditReview;
