import React, { useState, useEffect } from "react";
import { ToDoListItem } from "./ToDoListItem";
import { Button, TextInput } from "@mantine/core";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { updateList } from "../services/listService";
import { ShareListModal } from "./ShareListModal";
import { ArrowNarrowLeft } from "tabler-icons-react";
import { useNavigate } from "react-router";
import { PATHS } from "../utils/paths";

export const ToDoList = ({ list }) => {
  const [listItems, setListItems] = useState([]);
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setListItems(list.items);
  }, [list]);

  const addTask = (e) => {
    e.preventDefault();
    setListItems((prev) => [
      ...prev,
      { id: uuid(), task: userInput, complete: false },
    ]);
    setUserInput("");
  };

  const removeTask = (index) => () => {
    setListItems((prev) => prev.filter((_, idx) => idx !== index));
  };

  const clearCompleted = () => {
    setListItems((prev) => prev.filter((item) => !item.complete));
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const toggleCompleted = (index) => () => {
    setListItems((prev) => {
      return prev.map((item, idx) =>
        idx === index ? { ...item, complete: !item.complete } : item
      );
    });
  };
  const handleUpdate = () => {
    updateList({
      ...list,
      items: listItems,
    });
  };

  const handleGoBack = () => {
    navigate(PATHS.homepage);
  };

  return (
    <>
      <BackButton onClick={handleGoBack}>
        <ArrowNarrowLeft />
        Go Back
      </BackButton>
      <HeaderWrapper>
        <ListName>{list.title}</ListName>
        <Actions>
          <ShareListModal list={list} />
          <Button size="xs" onClick={clearCompleted}>
            Clear Completed
          </Button>
          <Button size="xs" onClick={handleUpdate}>
            Save list
          </Button>
        </Actions>
      </HeaderWrapper>
      <Form onSubmit={addTask}>
        <TextInput
          value={userInput}
          onChange={handleChange}
          placeholder="Add new item to your list"
        />
        <Button type="submit">Add</Button>
      </Form>
      <ListWrapper>
        {listItems &&
          listItems.map((todo, index) => {
            return (
              <ToDoListItem
                key={todo.id}
                todo={todo}
                removeTask={removeTask(index)}
                toggleCompleted={toggleCompleted(index)}
              />
            );
          })}
      </ListWrapper>
    </>
  );
};

const Form = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;

  .mantine-TextInput-root {
    width: 100%;
  }
`;

const ListWrapper = styled.div`
  margin: 20px 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;

  button {
    margin: 0;
  }
`;

const HeaderWrapper = styled.div`
  align-items: center;
  margin-bottom: 30px;
`;

const ListName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const BackButton = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 7px 0 20px;
`;
