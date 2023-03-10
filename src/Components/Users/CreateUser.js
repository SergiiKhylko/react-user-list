import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateUser.module.css"
import {useState, Fragment} from "react";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = props => {

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState(undefined);

  const nameChangeHandler = event => {
    setInputName(event.target.value);
  }

  const ageChangeHandler = event => {
    setInputAge(event.target.value);
  }

  const createUserHandler = event => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError(
        {
          title: "Input error",
          message: "Data is not valid"
        }
      );
      return;
    }
    if (+inputAge < 1) {
      setError(
        {
          title: "Age is not valid",
          message: "Age cannot be negative"
        }
      );
      return;
    }

    props.onCreateUser(inputName, inputAge);

    setInputName("");
    setInputAge("");
  }

  const closeErrorHandler = () => {
    setError(undefined);
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onClose={closeErrorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
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
    </Fragment>
  );
}


export default CreateUser;