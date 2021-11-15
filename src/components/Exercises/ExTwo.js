import React, { useState, useEffect } from "react";

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

const ExTwo = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(url);
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const renderedUsers = users.map((user) => {
    return <li key={user.id}>{user.name}</li>;
  });

  return <div>{renderedUsers}</div>;
};

export default ExTwo;
