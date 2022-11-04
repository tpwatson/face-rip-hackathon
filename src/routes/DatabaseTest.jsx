import React, {useState, useEffect} from 'react';
export default function DatabaseTest() {
  const [users, setUsers] = useState(false);
  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    fetch('http://localhost:3001/content')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setUsers(data);
      });
  }

  function createUser() {
    let name = prompt('Enter user name');
    let email = prompt('Enter user email');
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getUser();
      });
  }

  function deleteUser() {
    let id = prompt('Enter user id');
    fetch(`http://localhost:3001/users/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getUser();
      });
  }

  return (
    <div>
      {users ? users : 'There is no user data available'}
      <br />
      <button onClick={createUser}>Add user</button>
      <br />
      <button onClick={deleteUser}>Delete user</button>
    </div>
  );
}