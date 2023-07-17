import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users');
      const userData = await response.data;
      setUsers(userData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const validateInputs = () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields.');
      return false;
    }
    setError('');
    return true;
  };

  const createUser = async () => {
    try {
      if (!validateInputs()) {
        return;
      }
      const response = await axios.post('http://localhost:4000/users/register', {
        name,
        email,
        password,
      });
      const userData = await response.data;
      setUsers([...users, userData.data]);
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading users...</p>
      )}
      <h2>Create User</h2>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={createUser}>Register</button>
    </div>
  );
}

export default App;
