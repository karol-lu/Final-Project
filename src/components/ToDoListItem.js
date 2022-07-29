import React from "react";
import styled from "styled-components";
import { Checkbox } from "@mantine/core";
import { Trash } from "tabler-icons-react";

export const ToDoListItem = ({ todo, toggleCompleted, removeTask }) => {
  return (
    <ItemWrapper
      complete={todo.complete}
      key={todo.id}
      onClick={toggleCompleted}
    >
      <TaskNameWrapper>
        <Checkbox checked={todo.complete} />
        {todo.task}
      </TaskNameWrapper>
      <StyledIcon onClick={removeTask} />
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  margin-bottom: 5px;
  justify-content: space-between;
`;

const StyledIcon = styled(Trash)`
  transition: all 0.3s;
  cursor: pointer;
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
`;

const TaskNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
