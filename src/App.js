import Router from "./routes";
// import { initializeApp } from "firebase/app";
// import { collection, getDocs, getFirestore } from "firebase/firestore";
// import { useEffect, useState } from "react";

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBlRUY3f-lv5nNGVmWoWqgp3WiKbQScJg8",
//   authDomain: "keepalive-72076.firebaseapp.com",
//   projectId: "keepalive-72076",
// });

function App() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [users, setUsers] = useState([]);

  // const db = getFirestore(firebaseApp);
  // const userCollectionRef = collection(db, "users");

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);

  return (
    <>
      <Router />;
    </>
  );
}

export default App;
