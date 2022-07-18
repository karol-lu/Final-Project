import firebase, { db } from "../utils/firestore";

export const logInUser = ({ email, password, handleSuccess }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        return db
          .collection("users")
          .doc(user.uid)
          .get()
          .then(async (doc) => {
            if (doc.exists) {
              const data = await doc.data();
              localStorage.setItem("user", JSON.stringify(data));
              typeof handleSuccess === "function" && handleSuccess();
            }
          })
          .catch((error) => alert("Błąd logowania"));
      }
    });
};

export const logoutUser = ({ handleSuccess }) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem("user");
      typeof handleSuccess === "function" && handleSuccess();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const checkAuthUser = ({ handleSuccess }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return db
        .collection("users")
        .doc(user.uid)
        .get()
        .then(async (doc) => {
          if (doc.exists) {
            const data = await doc.data();
            localStorage.setItem("user", JSON.stringify(data));
            typeof handleSuccess === "function" && handleSuccess();
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  });
};
