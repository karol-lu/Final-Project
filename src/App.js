import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import { PATHS } from "./utils/paths";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Lists } from "./pages/Lists";
import { LogIn } from "./pages/LogIn";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <Helmet>Easy lists</Helmet>
      <BrowserRouter>
        <Routes>
          <Route exact path={PATHS.homepage} element={<Homepage />} />
          <Route exact path={PATHS.lists} element={<Lists />} />
          <Route exact path={PATHS.logIn} element={<LogIn />} />
          <Route exact path={PATHS.profile} element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
