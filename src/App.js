import { useReducer, useState } from 'react';
import Form from './components/Form';
import TodoBody from './components/TodoBody';
import Popup from './components/Popup';
/* import { openTodo } from './components/Form';
import { completedTodo } from './components/Form'; */
function App() {
  function reducer(state, action) {
    const newState = [...state];
    if (action.type === 'remove') {
      const newList = newState.filter((todo) => todo.title !== action.title);
      return newList;
    } else if (action.type === 'done') {
      const newList = newState.map(item => {
        if (item.title === action.title) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
      return newList;
    } else if (action.type === 'add') {
      const newList = [...newState, action];
      return newList;
    } else if (action.type === 'edit') {
      setIsOpen(true);
    
    }
    return newState;
  }
  
  function onAdd(input) {
    dispatch({type: 'add', title: input, completed: false});
  }

  function onRemove (title, completed) {
    dispatch({type: 'remove', title: title, completed: completed});
  }
  function onDone (title, completed) {
    dispatch({type: 'done', title: title, completed: completed});
  }
  function onEdit(title, completed) {
    dispatch({type: 'edit', title: title, completed: completed});
  }

  const [list, dispatch] = useReducer(reducer, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container-app'>
      {/* <Header /> */}
      <Form 
        onAdd={onAdd}
      />
      <TodoBody 
        list={list}
        onRemove={onRemove}
        onDone={onDone}
        onEdit={onEdit}
        setIsOpen={setIsOpen}
      />
      <Popup 
        trigger={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default App;
