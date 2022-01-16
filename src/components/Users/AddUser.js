import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleUserAge = (event) => {
    setUserAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }

    if (+userAge < 1) {
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          onChange={handleUserName}
          value={userName}
        ></input>
        <label htmlFor="age">Age (years)</label>
        <input
          type="number"
          id="age"
          onChange={handleUserAge}
          value={userAge}
        ></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
