import React, { useState } from "react";
import { Modal, Button, TextInput } from "@mantine/core";
import { shareList } from "../services/listService";

export const ShareListModal = ({ list }) => {
  const [opened, setOpened] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleModalOpen = () => {
    setOpened(true);
  };

  const handleModalClose = () => {
    setOpened(false);
  };

  const handleShare = () => {
    shareList({
      email,
      list,
    });
  };

  return (
    <>
      <Button size="xs" onClick={handleModalOpen}>
        Share list
      </Button>
      <Modal opened={opened} onClose={handleModalClose} title="Share list">
        <TextInput label="Email" value={email} onChange={handleEmailChange} />
        <Button onClick={handleShare}>Share</Button>
      </Modal>
    </>
  );
};
