import React from "react";

const UserTableBody = props => {
    const { usersAfterPagination, pageSize, currentPage } = props;
    let tableIndex = 1;

  return (
    <tbody>
      {usersAfterPagination &&
        usersAfterPagination.map(user => (
          <tr key={user.id}>
            <th scope="row">{(currentPage - 1) * pageSize + tableIndex++}</th>
            <td>{user.name} </td>
            <td>{user.email} </td>
            <td>{user.phone} </td>
            <td>
              {user.address && (
                <div>
                  <span>
                    {user.address.street}, {user.address.suite},{" "}
                    {user.address.city}, {user.address.zipcode}
                  </span>
                </div>
              )}{" "}
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default UserTableBody;
