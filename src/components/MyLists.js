import React, { useState, useEffect } from "react";
import { fetchMyLists } from "../services/listService";
import { AddNewListModal } from "../components/AddNewListModal";
import { ListItem } from "./ListItem";

export const MyLists = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetchMyLists({ callback: setLists });
  }, []);
  return (
    <div>
      <AddNewListModal />
      {lists.map((list) => {
        return <ListItem list={list} />;
      })}
    </div>
  );
};
