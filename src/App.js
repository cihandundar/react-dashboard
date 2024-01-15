import { Navbar, Sidebar } from "components";
import {
  Billing,
  Dashboard,
  NotFoundError,
  Profile,
  SignIn,
  SignUp,
  Tables,
} from "./pages";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" />
      <div className="container">
        <div>
          <Sidebar />
        </div>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
