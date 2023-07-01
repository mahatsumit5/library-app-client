import React, { Children } from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const UserLayout = ({ title, children }) => {
  return (
    <div className="d-flex">
      <div className="left-menu bg-dark text-light">
        <div className="text-center mt-3">{}</div>
        <hr />
        <ul>
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/signup" className="nav-link">
              Add Users
            </Link>
            <Link to="/books" className="nav-link">
              Books
            </Link>
          </li>
        </ul>
      </div>

      <div className="right-page w-100">
        <Header />
        <Container className="main">
          <h1 className="mt-2">{title}</h1>
          <hr />
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  );
};
