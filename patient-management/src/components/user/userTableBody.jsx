import React from "react";

const UserTableBody = props => {
    const { usersAfterPagination, pageSize, currentPage } = props;
    let tableIndex = 1;

  return (
    <tbody>
      {usersAfterPagination &&
        usersAfterPagination.map(user => (
          <tr key={user._id}>
            <th scope="row">{(currentPage - 1) * pageSize + tableIndex++}</th>
            <td>{user.firstName + ' ' + user.middleName + ' ' + user.lastName } </td>
            <td>{user.email} </td>
            <td>{user.contactNumber} </td>
            <td>
              {user && (
                <div>
                  <span>
                    {user.suite},{user.state}
                    {user.city}, {user.zipcode}
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
