import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FcLibrary } from "react-icons/fc";

import { AiFillDashboard, AiFillHome, AiOutlineHistory } from "react-icons/ai";
import { GiEntryDoor } from "react-icons/gi";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdReviews } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { ImExit, ImBooks } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persistor } from "../../store";
import { setUser } from "../../pages/signup-signin/userSlice";
import { setBurrow } from "../../pages/burrow-history/burrowSlice";
import { setStudentList } from "../../pages/Students/studentSlice";
import { fetchBurrowAction } from "../../pages/burrow-history/burrowAction";
export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const handleOnClick = () => {
    dispatch(fetchBurrowAction());
  };
  const handleOnSignout = () => {
    persistor.purge().then(() => {});
    // remove user for the redux
    dispatch(setUser({}));
    //remove burrowslist from the arraylist
    dispatch(setBurrow([]));
    dispatch(setStudentList([]));
  };
  return (
    <Navbar expand="md" bg="" variant="">
      <Container fluid>
        <Navbar.Brand href="/" className="fns">
          <FcLibrary className="icon" /> LMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm}`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-sm`} placement="end">
          <Offcanvas.Header closeButton className="border shadow">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`} className="">
              <Link className="nav-link" to="/profile">
                <BiSolidUserCircle /> {user?.fName}{" "}
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              {user?._id ? (
                <>
                  <Link className="nav-link" to="/">
                    <AiFillHome /> Home
                  </Link>

                  <Link className="nav-link" to="/dashboard">
                    <AiFillDashboard /> Dashboard
                  </Link>
                  <Link
                    className="nav-link"
                    to="/burrow-history"
                    onClick={handleOnClick}
                  >
                    <AiOutlineHistory /> Burrow History
                  </Link>
                  {user?.role === "admin" && (
                    <>
                      <Link className="nav-link" to="/book">
                        <ImBooks /> Books
                      </Link>

                      <Link className="nav-link" to="/reviews">
                        <MdReviews /> Reviews
                      </Link>

                      <Link className="nav-link" to="/students">
                        <FaUsers />
                        Students
                      </Link>
                      <Link
                        className="nav-link "
                        to="/  "
                        onClick={handleOnSignout}
                      >
                        <ImExit /> logout
                      </Link>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/">
                    <AiFillHome /> Home
                  </Link>
                  <Link className="nav-link" to="/signin">
                    {" "}
                    <GiEntryDoor /> Sign in
                  </Link>
                  <Link className="nav-link" to="/signup">
                    {" "}
                    <ImExit /> Sign up
                  </Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
