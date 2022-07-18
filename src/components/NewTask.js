import React, { useState } from "react";
import { Checkbox, List, ThemeIcon } from "@mantine/core";
import { CircleCheck, CircleX } from "tabler-icons-react";
import data from "../testData.json";
import { ToDoList } from "./ToDoList";

export const NewTask = () => {
  const [toDoList, setToDoList] = useState(data);
  // const [description, setDescription] = [""];

  return (
    <>
      <h1>New Task content</h1>
      <List>
        <List.Item>
          <ToDoList toDoList={toDoList} />
        </List.Item>
      </List>
    </>
  );
};
