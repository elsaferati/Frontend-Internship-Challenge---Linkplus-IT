import React, { useState } from 'react';

function AddUserForm({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert('Name and Email required');
    addUser({
      id: Date.now(),
      name,
      email,
      company: { name: 'Local Company' },
    });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: '20px'}}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;
