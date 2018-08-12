import React from 'react';

const renderUser = ({ id, username }) => (
  <h4 key={id} className="box title is-4">
    {username}
  </h4>
);

const UsersList = ({ users }) => users.map(renderUser);

export default UsersList;
