import React, { useEffect, useState } from "react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useSelector } from "react-redux";
import { CustomeCard } from "../../components/card/CustomeCard";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomPagination from "../../components/pagination/Pagination";

const Home = () => {
  const [display, setDisplay] = useState([]);
  const { books } = useSelector((state) => state.bookInfo);
  const [currentPage, setCurrentPage] = useState(1);
  const totalnumberOfBooks = books.length;
  const postPerPage = 8;
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const numberOfPagination = Math.ceil(totalnumberOfBooks / postPerPage);

  const booksToDisplay = books.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    setDisplay(books);
  }, [books]);
  const handldeOnSearch = (e) => {
    const { value } = e.target;

    const filteredBooks = booksToDisplay.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(filteredBooks);
    setDisplay(filteredBooks);
  };
  console.log(display);

  return (
    <div className="main">
      <Header />
      <section className="main">
        <Container fluid className="mt-5 w-75">
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <div className="left">{booksToDisplay.length} Books Found</div>
                <div className="right">
                  <Form.Control
                    placeholder="search by book name"
                    onChange={handldeOnSearch}
                  ></Form.Control>
                </div>
              </div>
              <div className="book-list d-flex justify-content-between flex-wrap gap-3 mt-5">
                {booksToDisplay?.map((book, i) => (
                  <Link to={`book/${book._id}`}>
                    <CustomeCard key={i} {...book} />
                  </Link>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
        <CustomPagination
          paginationNumber={numberOfPagination}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          lastPostIndex={lastPostIndex}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
