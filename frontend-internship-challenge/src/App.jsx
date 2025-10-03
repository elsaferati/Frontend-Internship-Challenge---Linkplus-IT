import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./pages/UserDetails";
import AddUser from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch initial users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  // Search filter
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  // Add user
  const addUser = (newUser) => {
    setUsers([newUser, ...users]);
    navigate("/");
  };

  // Update user
  const updateUser = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    navigate("/");
  };

  // Delete user
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // Sorting
  const sortByName = () => {
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const sortByEmail = () => {
    setUsers([...users].sort((a, b) => a.email.localeCompare(b.email)));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Management App</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/add">Add User</Link>
      </nav>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "250px" }}
      />

      <div style={{ marginBottom: "15px" }}>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByEmail} style={{ marginLeft: "10px" }}>
          Sort by Email
        </button>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <UserList
              users={filteredUsers}
              deleteUser={deleteUser}
              updateUser={updateUser}
            />
          }
        />
        <Route path="/user/:id" element={<UserDetails users={users} />} />
        <Route path="/add" element={<AddUser addUser={addUser} />} />
      </Routes>
    </div>
  );
}

export default App;

