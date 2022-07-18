import React, { useState } from "react";
import { Modal, Button, TextInput } from "@mantine/core";
import { v4 as uuid } from "uuid";
import { addNewList } from "../services/listService";

const defaultValues = {
  title: "",
  creator: {},
  createdAt: new Date(),
  items: [],
  users: [],
  id: uuid(),
};

export const AddNewListButton = () => {
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleModalOpen = () => {
    setOpened(true);
  };

  const handleModalClose = () => {
    setOpened(false);
  };

  const handleAddList = () => {
    const creator = JSON.parse(localStorage.getItem("user"));
    addNewList({ values: { ...defaultValues, title, creator } });
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Add new list</Button>
      <Modal opened={opened} onClose={handleModalClose} title="Add new list">
        <TextInput
          label="list name"
          value={title}
          onChange={handleTitleChange}
        />
        <Button onClick={handleAddList}>Add list</Button>
      </Modal>
    </>
  );
};
