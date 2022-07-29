import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { PATHS } from "../utils/paths";
import { Drawer, Button, Burger } from "@mantine/core";
import styled from "styled-components";
import { useLocation } from "react-router";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [opened, setOpened] = useState(false);

  const handleLogout = () => {
    logoutUser({
      handleSuccess: () => navigate(PATHS.logIn),
    });
  };

  const handleOpen = () => {
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };

  const handleRedirect = (path) => () => {
    navigate(path);
    handleClose();
  };

  return pathname !== PATHS.logIn ? (
    <BurgerWrapper>
      <Burger opened={opened} onClick={handleOpen} />
      <Drawer opened={opened} onClose={handleClose} padding="sm">
        <DrawerContent>
          <StyledLink onClick={handleRedirect(PATHS.homepage)}>
            Lists
          </StyledLink>
          <StyledLink onClick={handleRedirect(PATHS.profile)}>
            Profile
          </StyledLink>
          <Button onClick={handleLogout}>Logout</Button>
        </DrawerContent>
      </Drawer>
    </BurgerWrapper>
  ) : null;
};

export default Navigation;

const BurgerWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const DrawerContent = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledLink = styled.div`
  margin-bottom: 20px;
`;
