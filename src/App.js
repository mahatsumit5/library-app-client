import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/sgnup-signin/SignUp";
import Signin from "./pages/sgnup-signin/Signin";
import Dashboard from "./pages/Dashboard/Dashboard";
import { PrivateRoute } from "./components/private-route/PrivateRoute";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <PrivateRoute>
              <SignUp />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
