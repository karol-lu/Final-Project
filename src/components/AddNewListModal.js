import React, { useState } from "react";
import { Modal, Button, TextInput } from "@mantine/core";
import { v4 as uuid } from "uuid";
import { addNewList } from "../services/listService";
import styled from "styled-components";

const defaultValues = {
  title: "",
  creator: {},
  createdAt: new Date(),
  items: [],
  users: [],
  id: uuid(),
};

export const AddNewListModal = ({ fetchLists }) => {
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
    addNewList({
      values: {
        ...defaultValues,
        title,
        creator,
      },
      callback: () => {
        fetchLists();
        handleModalClose();
      },
    });
  };

  return (
    <>
      <ButtonWrapper>
        <Button size="xs" onClick={handleModalOpen}>
          Add new list
        </Button>
      </ButtonWrapper>
      <Modal opened={opened} onClose={handleModalClose} title="Add new list">
        <InputWrapper>
          <TextInput
            label="List name"
            value={title}
            onChange={handleTitleChange}
          />
        </InputWrapper>
        <Button onClick={handleAddList}>Add list</Button>
      </Modal>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;
