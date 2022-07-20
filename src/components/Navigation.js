import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { Button } from "@mantine/core";
import { PATHS } from "../utils/paths";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser({
      handleSuccess: () => navigate(PATHS.logIn),
    });
  };

  return (
    <NavigationBar>
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
