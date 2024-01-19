import React from "react";
import UserList from "./UserList";
import useUsersData from "./UseUsersData";

const UsersContainer = () => {
  const { data, isLoading, error } = useUsersData();

  const props = {
    isLoading,
    error,
    data,
  };

  return <UserList {...props}></UserList>;
};

export default UsersContainer;
