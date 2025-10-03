import React from "react";
import { Link } from "react-router-dom";

function UserList({ users, deleteUser }) {
  return (
    <div>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>
                  <Link to={`/user/${u.id}`}>{u.name}</Link>
                </td>
                <td>{u.email}</td>
                <td>{u.company?.name}</td>
                <td>
                  <button onClick={() => deleteUser(u.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;
