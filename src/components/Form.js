import '../scss/Form.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataStore from '../Datastore';
import { useContext } from 'react';

function Form() {

  const { onAdd } = useContext(DataStore);

  const [input, setInput] = useState('');
  const [inputDate, setInputDate] = useState(null);

  function handleDate(event) {
    setInputDate(event.target.value);
  }

  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleSubmit (event) {
    event.preventDefault();
    setInput('');
    setInputDate('');
  }

  function handleAdd () {
    if (!input || /^\s*$/.test(input)) {
      alert('Please enter a task');
      return;
    } else {
      onAdd(input, inputDate, uuidv4());
    }
  }

  return (
    <div className="main-container" >
      <div className="container-form">
        <h1>What is your plan for today?</h1>
        <form className="container-input" onSubmit={handleSubmit}>
          <input type="text" className="inputItem" placeholder="Add a todo ..." value={input} onChange={handleChange}/>
          <input type="date" className='inputDate' placeholder="Add a todo ..." value={inputDate} onChange={handleDate}/>
          <button className="btn-add" onClick={handleAdd}>Add Item</button>
        </form>
      </div>
    </div>
  );
}


export default Form;