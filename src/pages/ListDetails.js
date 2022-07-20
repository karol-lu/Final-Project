import { Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToDoList } from "../components/ToDoList";
import { fetchCurrentList } from "../services/listService";

export const ListDetails = () => {
  const [currentList, setCurrentList] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetchCurrentList({ id, callback: setCurrentList });
  }, [id]);

  return <ToDoList list={currentList} />;
};
