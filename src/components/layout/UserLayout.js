import React from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBurrowAction } from "../../pages/burrow-history/burrowAction";
import { FcLibrary } from "react-icons/fc";

export const UserLayout = ({ children, title }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const handleOnClick = () => {
    dispatch(fetchBurrowAction());
  };
  return (
    <div className="d-flex">
      {/* <div className="left-menu bg-dark text-light  ">
        <div className="text-center mt-3 ">
          {" "}
          <FcLibrary className="icon" /> LMS
        </div>
        <hr></hr>
        <ul className="list-unstyled mt-5">
          <li>{user?.role}</li>
          <li>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="/burrow-history"
              onClick={handleOnClick}
            >
              Burrow History
            </Link>
          </li>

          {user?.role === "admin" && (
            <>
              <li>
                <Link className="nav-link" to="/book">
                  Books
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/reviews">
                  Reviews
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
      </div> */}

      <div className="right-page w-100">
        <Header />

        <div className="main p-2">
          <h1 className="mt-2">{title}</h1>
          <hr />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
