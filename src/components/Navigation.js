import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { PATHS } from "../utils/paths";
import { Drawer, Button, Burger } from "@mantine/core";

const Navigation = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const handleLogout = () => {
    logoutUser({
      handleSuccess: () => navigate(PATHS.logIn),
    });
  };

  const redirectHome = () => {
    navigate(PATHS.homepage);
  };

  return (
    <>
      <Burger
        opened={opened}
        onClick={() => setOpened((o) => !o)}
        title={"cokolwiek"}
      />

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="l"
        size="m"
      >
        <Button onClick={redirectHome}>Homepage</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </Drawer>
    </>
  );
};

export default Navigation;
