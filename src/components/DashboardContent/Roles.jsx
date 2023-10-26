import React, { useState ,useEffect} from 'react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  position: relative;
  margin-bottom:300%;
  margin-left:-200%;
`;

const Table = styled.table`
  width: 80vw;
  position: absolute;
  top: 10;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1;

  th {
    width: 25%;
  }
`;


function MyTable() {
  const [users, setUsers] = useState([
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
    { id: 3, username: 'user3', password: 'password3' },
  ]);
 
  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('/api/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const [editingUserId, setEditingUserId] = useState(null);
  const [newUser, setNewUser] = useState({ username: '', password: '' });

  const handleDelete = (id) => {
    // Handle delete logic here
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (id) => {
    setEditingUserId(id);
  };

  const handleSave = (id, username, password) => {
    // Handle save/edit logic here
    const updatedUsers = users.map((user) =>
      user.id === id ? { id, username, password } : user
    );
    setUsers(updatedUsers);
    setEditingUserId(null);
  };

  const handleAdd = () => {
    // Handle add user logic here
    const newId = users.length + 1;
    setUsers([...users, { id: newId, ...newUser }]);
    setNewUser({ username: '', password: '' });
  };

  
  return (
    <section>
      <Container>
        <div style={{ marginRight: 0, marginLeft: "auto" }}>
          <h1>Users & Roles</h1>
          <button onClick={handleAdd}>Add</button>
        </div>
        <Table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={user.username}
                      onChange={(e) =>
                        handleSave(user.id, e.target.value, user.password)
                      }
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td>
                  {editingUserId === user.id ? (
                    <input
                      type="text"
                      value={user.password}
                      onChange={(e) =>
                        handleSave(user.id, user.username, e.target.value)
                      }
                    />
                  ) : (
                    user.password
                  )}
                </td>
                <td>
                  {editingUserId === user.id ? (
                    <button onClick={() => handleSave(user.id, user.username, user.password)}>
                      <FaSave />
                    </button>
                  ) : (
                    <button onClick={() => handleEdit(user.id)}>
                      <FaEdit />
                    </button>
                  )}
                  <button onClick={() => handleDelete(user.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
}

export default MyTable;
