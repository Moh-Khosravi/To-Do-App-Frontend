import '../scss/todoInput.scss';
import { useState } from 'react';


const restoredItem = localStorage.getItem('todo');
const todo = restoredItem ? JSON.parse(restoredItem) : [];
export const openTodo = todo.filter(item => !item.completed);
export const completedTodo = todo.filter(item => item.completed);

function TodoInput () {
  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleSubmit (event) {
    event.preventDefault();
    setInput('');
  }
  function addToList () {
    if (input === '') {
      return;
    }
    todo.push({title: input, completed: false});
    localStorage.setItem('todo', JSON.stringify(todo));
  };

  return (
    <div className="main-container" >
      <h1>What is your plan for today?</h1>
      <form className="container-input" onSubmit={handleSubmit}>
        <input type="text" className="inputItem" placeholder="Add a todo" value={input} onChange={handleChange}/>
        <button className="btn-add" onClick={addToList}>Add Item</button>
      </form>
      <div id="btn-container">
        <button className="btn clear">Show all tasks</button>
        <button className="show-active">Show active tasks</button>
        <button className="show-complete">Show completed tasks</button>
      </div>
    </div>
  );
}


export default TodoInput;