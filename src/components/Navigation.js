import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { Button } from "@mantine/core";
import { PATHS } from "../utils/paths";
import { BurgerMenu } from "./BurgerMenu";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser({
      handleSuccess: () => navigate(PATHS.logIn),
    });
  };

  const redirectHome = () => {
    let homepage = "home";
    navigate(PATHS.homepage);
  };

  return (
    <NavigationBar>
      <BurgerMenu />
      <Button onClick={redirectHome}>Homepage</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </NavigationBar>
  );
};

export default Navigation;

const NavigationBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
`;
