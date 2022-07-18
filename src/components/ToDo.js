import React from "react";

export const ToDo = ({ todo }) => {
  return <div className={todo.complete ? "done" : ""}>{todo.itemToDo}</div>;
};
