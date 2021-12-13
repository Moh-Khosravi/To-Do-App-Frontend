import '../scss/Form.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
/* const restoredItem = localStorage.getItem('todo');
const todo = restoredItem ? JSON.parse(restoredItem) : [];
export const openTodo = todo.filter(item => !item.completed);
export const completedTodo = todo.filter(item => item.completed); */

function Form({ onAdd }) {
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleSubmit (event) {
    event.preventDefault();
    setInput('');
  }

  function handleAdd () {
    onAdd(input, uuidv4());
  }
  return (
    <div className="main-container" >
      <div className="container-form">
        <h1>What is your plan for today?</h1>
        <form className="container-input" onSubmit={handleSubmit}>
          <input type="text" className="inputItem" placeholder="Add a todo ..." value={input} onChange={handleChange}/>
          <button className="btn-add" onClick={handleAdd}>Add Item</button>
        </form>
      </div>
    </div>
  );
}


export default Form;