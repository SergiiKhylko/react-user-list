import Card from "../UI/Card";
import styles from "./CreateUser.module.css"

const CreateUser = props => {

  const createUserHandler = event => {
    event.preventDefault();
    console.log("submit");
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={createUserHandler} >
        <label htmlFor="name">Name</label>
        <input id="name" type='text' />
        <label htmlFor="age">Age</label>
        <input id="age" type='number' />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default CreateUser;