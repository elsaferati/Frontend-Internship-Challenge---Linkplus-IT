import React, { useState } from "react";

function AddUserForm({ addUser }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError("Name and Email are required");
      return;
    }
    const newUser = {
      id: Date.now(),
      ...formData,
      company: { name: "Local User" },
    };
    addUser(newUser);
  };

  return (
    <div>
      <h2>Add New User</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUserForm;

