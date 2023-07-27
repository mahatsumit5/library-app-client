import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useSelector } from "react-redux";
import { CustomeCard } from "../../components/card/CustomeCard";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [display, setDisplay] = useState([]);
  const { books } = useSelector((state) => state.bookInfo);
  useEffect(() => {
    setDisplay(books);
  }, [books]);
  const handldeOnSearch = (e) => {
    const { value } = e.target;
    const filteredBooks = books.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplay(filteredBooks);
  };

  return (
    <div className="main">
      <Header />
      <section className="main">
        <Container fluid className="mt-5">
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <div className="left">{display.length} Books Found</div>
                <div className="right">
                  <Form.Control
                    placeholder="search by book name"
                    onChange={handldeOnSearch}
                  ></Form.Control>
                </div>
              </div>
              <div className="book-list d-flex justify-content-between flex-wrap gap=3 mt-5">
                {display?.map((book, i) => (
                  <Link to={`book/${book._id}`}>
                    <CustomeCard key={i} {...book} />
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
