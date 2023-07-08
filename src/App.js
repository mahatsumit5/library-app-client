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

function App() {
  const dispatch = useDispatch();
  // fetch Books
  useEffect(() => {
    dispatch(fetchBookAction());
  }, [dispatch]);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/book/:_id" element={<BookLanding />} />
        //colones make the path
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
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
          path="/book/edit/:_id"
          element={
            <PrivateRoute>
              <EditBookForm />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
