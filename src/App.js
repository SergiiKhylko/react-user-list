import CreateUser from "./Components/Users/CreateUser";
import UserList from "./Components/Users/UserList";
import {useState, Fragment} from "react";

const App = () => {

  const [userList, setUserList] = useState([]);

  const createUserHandler = (inputName, inputAge) => {
    setUserList([...userList, {name: inputName, age: inputAge, id: Math.random()}]) //todo
  }

  return (
    <Fragment>
      <CreateUser onCreateUser={createUserHandler}/>
      <UserList users={userList} />
    </Fragment>
  );
};

export default App;
