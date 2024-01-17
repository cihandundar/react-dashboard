import { Footer, Navbar, Sidebar } from "components";
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
import PrivateRoute from "components/PrivateRoute";
function App() {
  const route = [
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <NotFoundError />,
    },
    {
      element: <PrivateRoute />,
      routes: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/tables",
          element: <Tables />,
        },
        {
          path: "/billing",
          element: <Billing />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ];

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
            {route.map((route, index) => {
              if (route.routes) {
                return (
                  <Route element={route.element} key={index}>
                    {route.routes.map((subRoute, subIndex) => (
                      <Route
                        element={subRoute.element}
                        path={subRoute.path}
                        key={subIndex}
                      />
                    ))}
                  </Route>
                );
              }
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Routes>
          <Footer />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
