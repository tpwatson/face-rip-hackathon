import React, {useState, useEffect} from 'react';

export default function DatabaseTest() {
  const [content, setContent] = useState(false);
  useEffect(() => {
    getContent();
  }, []);

  function getContent() {
    fetch('http://localhost:3001/content')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setContent(data);
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
      {content ? content : 'There is no content data available'}
    </div>
  );
}