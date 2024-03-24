import React, { useState } from "react";
import { Datas } from "../data/datas";

function Usertable({ onEdit }) {
  const [data, setData] = useState(Datas);
  const HandleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("are you sure to delete?")) {
        const dt = data.filter(item => item.id !== id);
        setData(dt)
      }
      
    }

    
  }
  const HandleEdit = (id) => {
    // Find the user data based on id
    const userToEdit = data.find((item) => item.id === id);

    // Call the onEdit function passed as prop
    onEdit(userToEdit);
  };


  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email Id</th>
          <th>Phone No</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <tr key = {item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                <button id="edit" onClick={() => HandleEdit(item.id)}>
      Edit
    </button>
                  <button id="delete" onClick={() => HandleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="6">NO DATA!!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Usertable;