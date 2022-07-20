import React from "react";
import { ToDo } from "./ToDo";
import firebase, { db } from "../utils/firestore";
import { Button } from "@mantine/core";

export const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <Button onClick={handleFilter}>Clear Completed</Button>
    </div>
  );
};

// export const elementRef = db.collection("lists").doc(user.uid);

// elementRef.get().then((doc) => {
//   const data = doc.data();
//   return console.log(data);
// });
