import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateUser.module.css"
import React, {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = props => {

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const nameChangeHandler = event => {
    setInputName(event.target.value);
  }

  const ageChangeHandler = event => {
    setInputAge(event.target.value);
  }

  const createUserHandler = event => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      console.log("Data is not valid");
      return;
    }
    if (+inputAge < 1) {
      console.log("Age cannot be negative");
      return;
    }

    props.onCreateUser(inputName, inputAge);

    setInputName("");
    setInputAge("");
  }

  return (
    <div>
    <ErrorModal title="Error" message="Something went wrong" />
      <Card className={styles.input}>
        <form onSubmit={createUserHandler} >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type='text'
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type='number'
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}


export default CreateUser;