import React from "react";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addBurrowAction } from "../burrow-history/burrowAction";
import { Review } from "../../components/review/ReviewForm";
import { ReviewList } from "../../components/review/ReviewList";
import { Stars } from "../../components/star/Star";

export const BookLanding = () => {
  let totalRating = 0;
  const dispatch = useDispatch();
  const { _id } = useParams();
  const { reviews } = useSelector((store) => store.reviewInfo);
  const filteredReview = reviews.filter((review) => review.bookId === _id);
  filteredReview?.map(({ rating }) => {
    totalRating += parseInt(rating) / filteredReview.length;
  });
  // totalRating =
  //   filteredReview.reduce((acc, item) => acc + +item.star, 0) /
  //   filteredReview.length;
  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);
  const { thumbnail, title, author, year, summary, isAvailable, dueDate } =
    books.find((item) => item._id === _id) || {};
  const handleOnBurrow = () => {
    const obj = {
      bookId: _id,
      bookName: title,
      thumbnail: thumbnail,
      userId: user._id,
      userName: user.fName + user.lName,
    };
    dispatch(addBurrowAction(obj));
  };
  return (
    <div>
      <Header />
      <section className="main mt-5">
        <Container>
          <Row>
            <Col md="5">
              <img src={thumbnail} alt="" width="100%"></img>
            </Col>
            <Col md="7">
              <h1>{title}</h1>
              <p>
                {author}-{year}
              </p>
              <p>{summary} </p>
              {totalRating ? <Stars num={totalRating} /> : <></>}

              {user?._id ? (
                <div className="d-grid">
                  {isAvailable ? (
                    <Link to="/">
                      <Button variant="dark" onClick={handleOnBurrow}>
                        Burrow Now
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="dark" disabled>
                      Available From : {dueDate?.slice(0, 10)}
                    </Button>
                  )}
                </div>
              ) : (
                <div className="d-grid">
                  <Link to="/signin">
                    <Button variant="dark">Login to Burrow</Button>
                  </Link>
                </div>
              )}
            </Col>
          </Row>

          <Row>
            <Review title={title} />
          </Row>
          <Row className="mt-5">
            <Col>
              <ReviewList user={user} />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
