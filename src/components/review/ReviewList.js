import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MdReviews } from "react-icons/md";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { deleteReviewAction } from "../../pages/reviews/reviewAction";
import { Stars } from "../star/Star";

export const ReviewList = ({ user }) => {
  let totalRating = 0;

  const dispatch = useDispatch();
  const { reviews } = useSelector((store) => store.reviewInfo);
  const { _id } = useParams();
  const filteredReview = reviews?.filter(
    (review) => review.bookId === _id && review.status === "active"
  );
  filteredReview?.map(({ rating }) => {
    totalRating += parseInt(rating) / filteredReview.length;
  });

  const handleOndelete = (_id) => {
    dispatch(deleteReviewAction(_id));
  };
  return (
    <>
      {/* {filteredReview?._id ? <h1>review Found</h1> : <p> no reviews found</p>} */}
      <h3>
        <MdReviews />
        Reviews {filteredReview.length}
      </h3>

      {filteredReview?.map((review, index) => (
        <div key={index}>
          <hr />
          <div className="review-list">
            <div className="review  pt-4 px-4  gap-3">
              <div className="left-name">
                {review.user.slice(0, 2).toUpperCase()}{" "}
              </div>
              <div className="right-review p-2 shadow-lg px-4 gap-3 w-5">
                {user.fName === review.user ? (
                  <div className="text-end">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          href=""
                          onClick={() => handleOndelete(review._id)}
                        >
                          Remove
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                ) : (
                  <></>
                )}
                <h3>{review?.updatedAt.slice(0, 10)}</h3>
                <h3 className="text-start">
                  <Stars num={review.rating} />
                </h3>
                <p>{review.review}</p>
                <p className="text-end">--{review.user}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
