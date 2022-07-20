import React from "react";
import { Helmet } from "react-helmet";
import { PATHS } from "./utils/paths";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { LogIn } from "./pages/LogIn";
import { Profile } from "./pages/Profile";
import Navigation from "./components/Navigation";
import styled from "styled-components";
import { ListDetails } from "./pages/ListDetails";

function App() {
  return (
    <>
      <Helmet>Easy lists</Helmet>
      <BrowserRouter>
        <Navigation />
        <AppContent>
          <Routes>
            <Route exact path={PATHS.homepage} element={<Homepage />} />
            <Route exact path={PATHS.listDetails} element={<ListDetails />} />
            <Route exact path={PATHS.logIn} element={<LogIn />} />
            <Route exact path={PATHS.profile} element={<Profile />} />
          </Routes>
        </AppContent>
      </BrowserRouter>
    </>
  );
}

export default App;

const AppContent = styled.div`
  width: 100%;
  padding: 65px 15px 15px;
`;
