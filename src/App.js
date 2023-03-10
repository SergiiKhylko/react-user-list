import CreateUser from "./Components/Users/CreateUser";
import UserList from "./Components/Users/UserList";

const App = () => {
  return (
    <div>
      <CreateUser />
      <UserList users={[]} />
    </div>
  );
};

export default App;
