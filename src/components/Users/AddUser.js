import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid user", 
        message: "Please enter a valid name and age (no empty values)."
    });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a age > 0."
      });
      return;
    }
    const DataGathering = {
      name: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onAddUser(DataGathering);
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <Wrapper>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      ></ErrorModal>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
