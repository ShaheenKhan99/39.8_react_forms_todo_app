import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ createTodo }) => {

  const [task, setTask] = useState('');
  
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ task, id: uuid() });
    setTask('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task'>Task: </label>
        <input
          id="task"
          type="text"
          name="task"
          placeholder="Name of Todo"
          value={task}
          onChange={handleChange}
        />
        <button>Add a Todo</button>
      </form>
    </>
  );
}


export default NewTodoForm;