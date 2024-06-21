import { useEffect, useState } from "react";
import "./App.css";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const deleteItem = (id) => {
    if (confirm("Are You sure?")) {
      toast.success("User has been deleted");
      axios.delete(`http://localhost:3004/users/${id}`).then((res) => {
        setUsers([...users.filter((elm) => elm.id !== res.data.id)]);
      });
    }
  };

  const addItem = (obj) => {
    setUsers([...users, obj]);
    toast.success("New user has been added succesfuly");
  };

  const addSalary = (id) => {
    const user = users.find((item) => item.id === id);
    if (user) {
      const updatedUser = { ...user, sallary: +user.sallary + 50000 };
      axios
        .put(`http://localhost:3004/users/${id}`, updatedUser)
        .then((res) => {
          setUsers(users.map((user) => (user.id === id ? res.data : user)));
          toast.success("User's sallary has been increased by 50000");
        });
    }
  };
  return (
    <div className="row">
      <ToastContainer />
      <AddUser onAdd={addItem} />
      <UserList users={users} onDel={deleteItem} onUp={addSalary} />
    </div>
  );
}

export default App;
