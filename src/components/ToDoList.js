import React from "react";
import { ToDo } from "./ToDo";
import firebase, { db } from "../utils/firestore";

export const ToDoList = ({ toDoList }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} />;
      })}
    </div>
  );
};

// export const elementRef = db.collection("lists").doc(user.uid);

// elementRef.get().then((doc) => {
//   const data = doc.data();
//   return console.log(data);
// });
