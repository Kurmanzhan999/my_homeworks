import React,{useState} from 'react';
import './App.css';
// import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import AddUser from './components/Users/AddUser'

function App() {
  const [userList, setUserList]=useState([]);

  const addUserHandler = (uName, uAge) => {
    // setUserList(
    //   [
    //   ...userList,
    //   {name:uName, age: uAge,id:Math.random().toString()}
    //    ] );
  //   console.log('in app.js');
  //  console.log (uName, uAge);
  setUserList((prevUserList)=>{
    return[
      ...prevUserList,
      {name:uName, age: uAge,id:Math.random().toString()}

    ]
  })
  }
  const onDelete=(goalId)=>{
    setUserList((prevUsers)=>{
      const upDateUser= prevUsers.filter((user)=>user.id!==goalId)
      return upDateUser
    });
  }
  return (
    <div>
    <AddUser onAddUser = {addUserHandler}/>
    
    <UserList users={userList} onDelete={onDelete}/>
    </div>
  );
}

export default App;


