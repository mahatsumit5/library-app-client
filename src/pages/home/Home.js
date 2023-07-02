import React from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { CustomeCarousel } from "../../components/carousel/Carousel";
import { useSelector } from "react-redux";
import { CustomeCard } from "../../components/card/CustomeCard";
import { Col, Container, Row, Form } from "react-bootstrap";

const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);
  return (
    <div className="main">
      <Header />
      <section className="main">
        <div className="hero">Slider</div>
        <CustomeCarousel />
        <Container className="mt-5">
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <div className="left">{books.length} Books Found</div>
                <div className="right">
                  {" "}
                  <Form.Control placeholder="search by book name"></Form.Control>
                </div>
              </div>
              <div className="book-list d-flex justify-content-between flex-wrap gap=3 mt-5">
                {" "}
                {books.map((book, i) => (
                  <CustomeCard key={i} {...book} />
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
