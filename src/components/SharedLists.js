import React, { useState, useEffect } from "react";
import { fetchSharedLists } from "../services/listService";
import { ListItem } from "./ListItem";

export const SharedLists = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetchSharedLists({ callback: setLists });
  }, []);
  return (
    <div>
      {lists.map((list) => {
        return <ListItem list={list} />;
      })}
    </div>
  );
};
