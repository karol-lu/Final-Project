import toast from "react-hot-toast";
import { db } from "../utils/firestore";

export const addNewList = ({ values, callback }) => {
  db.collection("lists")
    .doc(values.id)
    .set(values)
    .then(() => {
      typeof callback === "function" && callback();
    });
};

export const fetchSharedLists = async ({ callback }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const snapshot = await db.collection("lists").get();
  if (snapshot.empty) {
    return [];
  } else {
    let data = [];
    snapshot.forEach((doc) => {
      data = [...data, doc.data()];
    });
    const filtered = data.filter((list) => {
      const users = list.users;
      const usersIds = users.map((u) => u.id);
      return usersIds.includes(user.id);
    });
    callback(filtered);
  }
};

export const fetchMyLists = async ({ callback }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const snapshot = await db
    .collection("lists")
    .where("creator.id", "==", user.id)
    .get();
  if (snapshot.empty) {
    return [];
  } else {
    let data = [];
    snapshot.forEach((doc) => {
      data = [...data, doc.data()];
    });
    callback(data);
  }
};

export const fetchCurrentList = ({ callback, id }) => {
  db.collection("lists")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data();
      callback(data);
    });
};

export const updateList = (list) => {
  return db
    .collection("lists")
    .doc(list.id)
    .update(list)
    .then(() => {
      toast.success("The list has been updated");
    })
    .catch(() => {
      toast.error("Something went wrong");
    });
};

export const shareList = async ({ list, email }) => {
  const snapshot = await db
    .collection("users")
    .where("email", "==", email)
    .get();
  if (snapshot.empty) {
    return [];
  } else {
    let data = [];
    snapshot.forEach((doc) => {
      data = [...data, doc.data()];
    });
    const user = data[0];
    if (user) {
      updateList({
        ...list,
        users: [...list.users, user],
      });
    }
  }
};

export const removeList = ({ id, callback }) => {
  return db
    .collection("lists")
    .doc(id)
    .delete()
    .then(() => {
      typeof callback === "function" && callback();
    });
};
