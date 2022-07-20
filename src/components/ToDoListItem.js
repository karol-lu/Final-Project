import React from "react";
import styled from "styled-components";
import theme from "../utils/theme";
export const ToDoListItem = ({ todo, toggleCompleted, removeTask }) => {
  return (
    <ItemWrapper
      complete={todo.complete}
      key={todo.id}
      onClick={toggleCompleted}
    >
      {todo.task} - <span onClick={removeTask}>remove</span>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  color: ${({ complete }) => (complete ? "red" : "default")};
`;
