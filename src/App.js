import CreateUser from "./Components/Users/CreateUser";
import UserList from "./Components/Users/UserList";
import {useState} from "react";

const App = () => {

  const [userList, setUserList] = useState([]);

  const createUserHandler = (inputName, inputAge) => {
    setUserList([...userList, {name: inputName, age: inputAge, id: Math.random()}]) //todo
  }


  return (
    <div>
      <CreateUser onCreateUser={createUserHandler}/>
      <UserList users={userList} />
    </div>
  );
};

export default App;
