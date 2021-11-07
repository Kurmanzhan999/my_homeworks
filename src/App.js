import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import moment from moment;
import TodoForm from './component/TodoForm';
import ToDoList from "./component/ToDoList";
import "./App.css";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  const deadline = moment(todos.deadline).format('MMM Do YYYY')

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        React Todo
      </Typography>
      <TodoForm addTodo={addTodo} />
      <ToDoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}/>
       {deadline}
    </div>
  );
}

export default App;
