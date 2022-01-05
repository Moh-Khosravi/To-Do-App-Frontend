import '../scss/Form.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function Form({ onAdd }) {
  const [input, setInput] = useState('');
  const [inputDate, setInputDate] = useState('');

  function handleDate(event) {
    setInputDate(event.target.value);
  }

  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleSubmit (event) {
    event.preventDefault();
    setInput('');
  }

  function handleAdd () {
    onAdd(input, inputDate, uuidv4());
  }
  return (
    <div className="main-container" >
      <div className="container-form">
        <h1>What is your plan for today?</h1>
        <form className="container-input" onSubmit={handleSubmit}>
          <input type="text" className="inputItem" placeholder="Add a todo ..." value={input} onChange={handleChange}/>
          <input type="date" className='inputDate' onChange={handleDate}/>
          <button className="btn-add" onClick={handleAdd}>Add Item</button>
        </form>
      </div>
    </div>
  );
}


export default Form;