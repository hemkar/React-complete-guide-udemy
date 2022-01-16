import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input type="text" id="userName"></input>
        <label htmlFor="age">Age (years)</label>
        <input type="text" id="age"></input>
        <button type="submit">Add user</button>
      </form>
    </Card>
  );
};

export default AddUser;
