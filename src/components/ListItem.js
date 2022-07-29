import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Checklist } from "tabler-icons-react";
import RemoveListModal from "./RemoveListModal";

export const ListItem = ({ list, fetchLists }) => {
  const navigate = useNavigate();

  const handleRedirect = (e) => {
    e.stopPropagation();
    navigate(`/lists/${list.id}`);
  };

  return (
    <Wrapper>
      <TaskNameWrapper onClick={handleRedirect}>
        <StyledListIcon />
        {list.title}
      </TaskNameWrapper>
      <RemoveListModal listId={list.id} fetchLists={fetchLists} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 15px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const StyledListIcon = styled(Checklist)`
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
`;

const TaskNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
