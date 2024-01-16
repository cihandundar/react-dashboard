import { Footer, Navbar, Sidebar } from "components";
import {
  Billing,
  Dashboard,
  NotFoundError,
  Profile,
  Login,
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
      <main className="container">
        <div>
          <Sidebar />
        </div>
        <section className="wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
          <Footer />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
