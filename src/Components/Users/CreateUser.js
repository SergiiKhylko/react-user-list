const CreateUser = props => {

  const createUserHandler = event => {
    event.preventDefault();
    console.log("submit");
  }

  return (
    <form onSubmit={createUserHandler}>
      <label htmlFor="name">Name</label>
      <input id="name" type='text' />
      <label htmlFor="age">Age</label>
      <input id="age" type='number' />
      <button type="submit">Add User</button>
    </form>
  )
}

export default CreateUser;