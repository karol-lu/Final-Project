import { React, useState } from "react";
import { Button, Input } from "@mantine/core";

export const NewItem = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Add new item to your list"
      />
      <Button>Submit</Button>
    </form>
  );
};
