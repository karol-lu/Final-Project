import React, { useState } from "react";
import { Modal, Button, Center, Group } from "@mantine/core";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../utils/paths";
import { AddNewListButton } from "../components/AddNewListButton";
import { NewTask } from "../components/NewTask";

export const Homepage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser({
      handleSuccess: () => navigate(PATHS.logIn),
    });
  };

  return (
    <>
      <Group>
        <AddNewListButton />
        <Button onClick={handleLogout}>Logout</Button>
      </Group>
      <NewTask />
    </>
  );
};
