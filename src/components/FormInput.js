import '../scss/FormInput.scss';
import { useState } from 'react';
import { useAppData } from '../context/DataStorage.js';

function Form() {
  const { postTodo, userName } = useAppData();

  const [input, setInput] = useState('');
  const [inputStartDate, setInputStartDate] = useState(null);
  const [inputEndDate, setInputEndDate] = useState(null);

  function handleStartDate(event) {
    setInputStartDate(event.target.value);
  }
  function handleEndDate(event) {
    setInputEndDate(event.target.value);
  }
  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setInput('');
    setInputStartDate('');
    setInputEndDate('');
  }

  function handleAdd() {
    if (!input || /^\s*$/.test(input)) {
      alert('Please enter a task');
      return;
    } else {
      postTodo(input, inputStartDate, inputEndDate);
    }
  }

  return (
    <div className="main-container">
      <div className="container-form">
        <h1>Hello {userName}</h1>
        <form className="container-input" onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputItem"
            placeholder="Add a todo ..."
            value={input}
            onChange={handleChange}
          />
          <div>
            <label htmlFor="">Start date:</label>
            <input
              type="date"
              className="inputDate"
              value={inputStartDate}
              onChange={handleStartDate}
            />
          </div>
          <div>
            <label>End date:</label>
            <input
              type="date"
              className="inputDate"
              value={inputEndDate}
              onChange={handleEndDate}
            />
          </div>
          <button className="btn-add" onClick={handleAdd}>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
