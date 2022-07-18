import { db } from "../utils/firestore";

export const addNewList = ({ values, callback }) => {
  db.collection("lists").doc(values.id).set(values);
};
