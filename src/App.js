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
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Helmet>Easy lists</Helmet>
      <BrowserRouter>
        <Navigation />
        <AppContent>
          <Routes>
            <Route
              exact
              path={PATHS.homepage}
              element={
                <PrivateRoute>
                  <Homepage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={PATHS.listDetails}
              element={
                <PrivateRoute>
                  <ListDetails />
                </PrivateRoute>
              }
            />
            <Route exact path={PATHS.logIn} element={<LogIn />} />
            <Route
              exact
              path={PATHS.profile}
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </AppContent>
      </BrowserRouter>
    </>
  );
}

export default App;

const AppContent = styled.div`
  width: 100%;
  padding: 20px;
`;
