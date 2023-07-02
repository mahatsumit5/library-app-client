import React from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const UserLayout = ({ children, title }) => {
  const { user } = useSelector((state) => state.userInfo);

  return (
    <div className="d-flex">
      <div className="left-menu bg-dark text-light  ">
        <div className="text-center mt-3 ">{user?.role?.toUpperCase()}</div>
        <hr />
        <ul className="list-unstyled mt-5">
          <li>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/burrow-history">
              Burrow History
            </Link>
          </li>

          {user?.role === "admin" && (
            <>
              <li>
                <Link className="nav-link" to="/books">
                  Books
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/students">
                  Students
                </Link>
              </li>
              <hr />
              <li>
                <Link className="nav-link" to="/signup">
                  Add Admin
                </Link>
              </li>
            </>
          )}

          <li>
            <Link className="nav-link" to="/profile">
              Profile
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
