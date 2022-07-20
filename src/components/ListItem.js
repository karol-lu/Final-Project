import React from "react";
import { useNavigate } from "react-router";

export const ListItem = ({ list }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/lists/${list.id}`);
  };
  return <div onClick={handleRedirect}>{list.title}</div>;
};
