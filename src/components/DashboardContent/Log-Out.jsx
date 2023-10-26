import React, { useState } from 'react';

function MyTable() {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin' },
    { id: 2, name: 'User' },
    { id: 3, name: 'Manager' },
  ]);

  const handleDelete = (id) => {
    // Handle delete logic here
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id}>
            <th scope="row">{role.id}</th>
            <td>{role.name}</td>
            <td>
              <button onClick={() => handleDelete(role.id)}>Delete</button>
              {/* You can add Edit and other actions here */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
