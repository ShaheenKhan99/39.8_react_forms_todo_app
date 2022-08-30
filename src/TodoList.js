import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // add a new todo
  const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  // update a todo with updatedTask
  const update = (id, updatedTask) => {
    setTodos(todos => todos.map(todo => 
                todo.id === id ? { ...todos, task: updatedTask } : todo )
    );
  }

  // delete a todo by id
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  };

  const todoComponents = todos.map(todo => (
    <Todo
      key={todo.id}
      id={todo.id}
      task={todo.task}
      remove={remove}
      update={update}
    />
  ));
  
    return (
      <div className="TodoList">
        <h3>Create a Todo</h3>
        <NewTodoForm createTodo={create} />
        <ul>
        {todoComponents}
        </ul>
        
      </div>
    )
  }

export default TodoList;