/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./less/styles.css";
import { AuthProvider } from "./app/context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./app/Dashboard";
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./app/components/PrivateRoute";
import Login from "./app/user/LogIn";
import SignIn from "./app/user/SignIn";
import SignUp from "./app/user/SignUp";
import Events from "./pages/Events";
import AboutMe from "./pages/AboutMe";
import Gallery from "./pages/Gallery";
import Socials from "./pages/Socials";
import Shop from "./pages/Shop";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => false);

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />

            <Route exact path="/events/:id" element={<Events />} />

            <Route exact path="/events" element={<Events />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/aboutme" element={<AboutMe />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/socials" element={<Socials />} />

            <Route exact path="/" element={<PrivateRoute />}>
              <Route
                path="/"
                element={<UserDashboard isLoggedIn={isLoggedIn} />}
              />
            </Route>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;