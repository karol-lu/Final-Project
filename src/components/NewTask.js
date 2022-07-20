import React, { useState } from "react";
import { Checkbox, List, ThemeIcon } from "@mantine/core";
import { CircleCheck, CircleX } from "tabler-icons-react";
import data from "../testData.json";
import { ToDoList } from "./ToDoList";
import { NewItem } from "./NewItem";

export const NewTask = () => {
  const [toDoList, setToDoList] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map((itemToDo) => {
      return itemToDo.id == id
        ? { ...itemToDo, complete: !itemToDo.complete }
        : { ...itemToDo };
    });
    setToDoList(mapped);
  };
  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  return (
    <>
      <h1>New Task content</h1>
      <List>
        <List.Item>
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        </List.Item>
      </List>
      <NewItem addTask={addTask} />
    </>
  );
};
