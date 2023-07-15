import React, { useEffect, useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getReviewAction,
  postReviewAction,
} from "../../pages/reviews/reviewAction";
import CustomeInput from "../custome-input/CustomeInput";
export const Review = ({ title, book }) => {
  const dispatch = useDispatch();

  const stars = [
    {
      value: 1,
      id: "s1",
    },
    {
      value: 2,
      id: "s2",
    },
    {
      value: 3,
      id: "s3",
    },
    {
      value: 4,
      id: "s4",
    },
    {
      value: 5,
      id: "s5",
    },
  ];
  const { _id } = useParams();
  const [review, setReview] = useState({
    rating: 0,
  });
  const { user } = useSelector((store) => store.userInfo);

  useEffect(() => {
    getReviewAction();
  }, [dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setReview({
      status: user.role === "admin" ? "active" : "inactive",
      userId: user._id,
      bookId: _id || book._id,
      user: user.fName,
      bookName: title || book.bookName,
      ...review,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postReviewAction(review));
  };
  return (
    <div>
      <Col>
        <Form onSubmit={handleOnSubmit}>
          <h2>How was your experience reading this book?</h2>
          <div className="fs-3">
            {stars?.map(({ value, id }) => (
              <>
                <input
                  value={value}
                  onChange={handleOnChange}
                  type="radio"
                  name="rating"
                  id={id}
                />
                <label htmlFor={id}>
                  {review.rating !== value &&
                  value > parseInt(review.rating) ? (
                    <AiOutlineStar />
                  ) : (
                    <AiFillStar className="text-warning " />
                  )}
                </label>
              </>
            ))}
          </div>
          <CustomeInput
            label="Title"
            name="title"
            placeholder="Best book  ever"
            onChange={handleOnChange}
            required
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Review Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              col={5}
              name="review"
              onChange={handleOnChange}
            />
          </Form.Group>
          <div className="d-grid">
            {user?._id ? (
              <Button variant="success" type="submit">
                Submit
              </Button>
            ) : (
              <div className="d-grid">
                <Link to="/signin">
                  <Button variant="warning">Login to Review</Button>
                </Link>
              </div>
            )}
          </div>
        </Form>
      </Col>
    </div>
  );
};
