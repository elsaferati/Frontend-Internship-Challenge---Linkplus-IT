import { useEffect, useState } from "react";

function UserList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));

    }, []);

    const filteredUsers =users.filter(user =>
        user.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        user.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    const addUser = (newUser) => {
        setUsers([...users, newUser])
    };

  return (
    <div>
      <h1>User Management</h1>
      <AddUserForm addUser={addUser} />
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredUsers.map(user => (
          <div key={user.id} style={{border: '1px solid #ccc', margin: '10px', padding: '10px'}}>
            <Link to={`/user/${user.id}`}>
              <h3>{user.name}</h3>
            </Link>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UserList;