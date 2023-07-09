import React from "react";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addBurrowAction } from "../burrow-history/burrowAction";
import { Review } from "../../components/review/Review";

export const BookLanding = () => {
  const dispatch = useDispatch();

  const { _id } = useParams();
  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);
  const { thumbnail, title, author, year, summary, isAvailable, dueDate } =
    books.find((item) => item._id === _id) || {};

  const handleOnBurrow = () => {
    console.log("first");
    const obj = {
      bookId: _id,
      bookName: title,
      thumbnail: thumbnail,
      userId: user._id,
      userName: user.fName + user.lName,
    };
    console.log(obj);

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
              <p>{summary}</p>
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
              <h3>Reviews</h3>
              <hr />
              <div className="review-list">
                <div className="review  pt-4 px-4  gap-3">
                  <div className="left-name"> Pa </div>
                  <div className="right-review p-2 shadow-lg px-4 gap-3">
                    <h3>{user.fName}</h3>
                    <div>5 star</div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi, aut perspiciatis. Iusto eligendi odio veritatis
                      consectetur mollitia deleniti facilis optio facere, quod
                      cum atque distinctio cupiditate ducimus repellendus dicta
                      fugit.
                    </p>
                    <p className="text-end">--Sumit</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
