import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoBody from './components/TodoBody';
/* import { openTodo } from './components/Form';
import { completedTodo } from './components/Form'; */
function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState('');
  return (
    <div>
      <Header />
      <Form 
        input={input}
        setInput={setInput}
        list={list}
        setList={setList}
      />
      <TodoBody 
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
