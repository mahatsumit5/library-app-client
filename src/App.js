import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup-signin/SignUp";
import Signin from "./pages/signup-signin/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";
import { PrivateRoute } from "./components/private-route/PrivateRoute";
import Books from "./pages/Books/Books";
import { NewBook } from "./components/book-comp/NewBook";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBookAction } from "./pages/Books/bookAction";
import { EditBookForm } from "./components/book-comp/EditBookForm";
import { BookLanding } from "./pages/Books/BookLanding";
import { BurrowHistory } from "./pages/burrow-history/BurrowHistory.js";
import { fetchBurrowAction } from "./pages/burrow-history/burrowAction";
import { Student } from "./pages/Students/Student";
import { Profile } from "./pages/Profile/Profile";
import { EditUser } from "./components/user/EditUser";
import { getReviewAction } from "./pages/reviews/reviewAction";
import { Reviews } from "./pages/reviews/Review";

function App() {
  const dispatch = useDispatch();
  // fetch Books
  useEffect(() => {
    dispatch(fetchBookAction());
    dispatch(getReviewAction());
  }, [dispatch]);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/book/:_id" element={<BookLanding />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="profile/edit/:_id" element={<EditUser />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/book"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <PrivateRoute>
              <Reviews />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/new"
          element={
            <PrivateRoute>
              <NewBook />
            </PrivateRoute>
          }
        />
        <Route
          path="/students"
          element={
            <PrivateRoute>
              <Student />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/edit/:_id"
          element={
            <PrivateRoute>
              <EditBookForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/burrow-history"
          element={
            <PrivateRoute>
              <BurrowHistory />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
