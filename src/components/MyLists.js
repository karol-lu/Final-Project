import React, { useState, useEffect } from "react";
import { fetchMyLists } from "../services/listService";
import { AddNewListModal } from "../components/AddNewListModal";
import { ListItem } from "./ListItem";
import styled from "styled-components";

export const MyLists = () => {
  const [lists, setLists] = useState([]);

  const fetchLists = () => {
    fetchMyLists({ callback: setLists });
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div>
      <AddNewListModal fetchLists={fetchLists} />
      {lists.map((list) => {
        return <ListItem key={list.id} list={list} fetchLists={fetchLists} />;
      })}
    </div>
  );
};
