import { useState } from 'react/cjs/react.development';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList]=useState([]);

  const addUserHandler = (uName , uAge) =>{
    console.log('in app.js');
   console.log (uName, uAge);
  }
  return (
    <div className="App">
    <AddUser onAddUser = {addUserHandler}/>
    <UserList users={userList}/>
    </div>
  );
}

export default App;
