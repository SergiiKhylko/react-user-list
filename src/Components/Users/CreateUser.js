import Card from "../UI/Card";

const CreateUser = props => {

  const createUserHandler = event => {
    event.preventDefault();
    console.log("submit");
  }

  return (
    <Card>
      <form onSubmit={createUserHandler}>
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