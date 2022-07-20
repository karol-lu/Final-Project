import React from "react";

export const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      key={todo.id + todo.itemToDo}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? "todo done" : "todo"}
    >
      {todo.itemToDo}
    </div>
  );
};
