import React, { useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user || {});

  if (!user) return <p>User not found</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>User Details</h2>
      {!editing ? (
        <div>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Website:</b> {user.website}</p>
          <p><b>Address:</b> {user.address?.street}, {user.address?.city}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      ) : (
        <div>
          <input name="name" value={formData.name} onChange={handleChange} />
          <input name="email" value={formData.email} onChange={handleChange} />
          <button onClick={() => setEditing(false)}>Save</button>
        </div>
      )}
    </div>
  );
}

export default UserDetails;

