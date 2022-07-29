import React, { useState } from "react";
import { Modal, Button } from "@mantine/core";
import { removeList } from "../services/listService";
import styled from "styled-components";
import { Trash } from "tabler-icons-react";

const RemoveListModal = ({ listId, fetchLists }) => {
  const [opened, setOpened] = useState(false);

  const handleModalOpen = (e) => {
    e.stopPropagation();
    setOpened(true);
  };

  const handleModalClose = (e) => {
    e && e.stopPropagation();
    setOpened(false);
  };

  const handleRemove = () => {
    removeList({
      id: listId,
      callback: () => {
        fetchLists();
        handleModalClose();
      },
    });
  };

  return (
    <>
      <StyledTrashIcon onClick={handleModalOpen} />
      <Modal
        opened={opened}
        onClose={handleModalClose}
        title="Remove list"
        closeOnClickOutside={false}
      >
        Do you really want to remove this list?
        <ButtonsWrapper onClick={(e) => e.stopPropagation()}>
          <Button variant="default" fullWidth onClick={handleModalClose}>
            Cancel
          </Button>
          <Button fullWidth onClick={handleRemove}>
            Remove
          </Button>
        </ButtonsWrapper>
      </Modal>
    </>
  );
};

export default RemoveListModal;

const StyledTrashIcon = styled(Trash)`
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
