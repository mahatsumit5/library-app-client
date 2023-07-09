import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postReviewAction } from "../../pages/Books/reviewAction";
export const Review = ({ title }) => {
  const { _id } = useParams();
  const [review, setReview] = useState({});
  const { user } = useSelector((store) => store.userInfo);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setReview({
      userId: user._id,
      star: 5,
      [name]: value,
      bookId: _id,
      reviewDate: Date(),
      bookName: title,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    postReviewAction(review);
    // console.log(review);
  };
  return (
    <div>
      <Col>
        <h2>How was your experience reading this book?</h2>
        <div className="stars">
          <AiFillStar value />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </Col>
      <Col>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter Your Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              col={3}
              name="review"
              onChange={handleOnChange}
            />
          </Form.Group>
          <div className="d-grid">
            {" "}
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Col>
    </div>
  );
};
