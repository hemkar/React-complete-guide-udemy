import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  // const handleUserName = (event) => {
  //   setUserName(event.target.value);
  // };

  // const handleUserAge = (event) => {
  //   setUserAge(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userNameRef.current.value.trim().length === 0 ||
      userAgeRef.current.value.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age (non-empty values)",
      });
      return;
    }

    if (+userAgeRef.current.value < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter valid age ( >0)",
      });
      return;
    }
    props.onAddUser(userNameRef.current.value, userAgeRef.current.value);
    userNameRef.current.value = "";
    userAgeRef.current.value = "";
    // setUserName("");
    // setUserAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onSubmit={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            id="userName"
            // onChange={handleUserName}
            // value={userName}
            ref={userNameRef}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            // onChange={handleUserAge}
            // value={userAge}
            ref={userAgeRef}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
