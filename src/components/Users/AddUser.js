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
    console.log(userName, userAge);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input type="text" id="userName" onChange={handleUserName}></input>
        <label htmlFor="age">Age (years)</label>
        <input type="text" id="age" onChange={handleUserAge}></input>
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
