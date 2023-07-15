import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillDashboard, AiFillHome } from "react-icons/ai";
import { GiEntryDoor } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persistor } from "../../store";
import { setUser } from "../../pages/signup-signin/userSlice";
import { setBurrow } from "../../pages/burrow-history/burrowSlice";
import { setStudentList } from "../../pages/Students/studentSlice";
import { FcLibrary } from "react-icons/fc";
export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);

  const handleOnSignout = () => {
    persistor.purge().then(() => {});
    // remove user for the redux
    dispatch(setUser({}));
    //remove burrowslist from the arraylist
    dispatch(setBurrow([]));
    dispatch(setStudentList([]));
  };
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <FcLibrary />
          Library Management
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link className="nav-link" to="/">
                  <AiFillHome /> Home
                </Link>
                <Link className="nav-link" to="/dashboard">
                  <AiFillDashboard /> Dashboard
                </Link>
                <Link className="nav-link" to="/  " onClick={handleOnSignout}>
                  {" "}
                  <ImExit /> Sign out
                </Link>
              </>
            ) : (
              <>
                {" "}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
