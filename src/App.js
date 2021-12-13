import { useReducer } from 'react';
import Form from './components/Form';
import TodoBody from './components/TodoBody';
/* import { openTodo } from './components/Form';
import { completedTodo } from './components/Form'; */
function App() {

  const [list, dispatch] = useReducer(reducer, []);

  function reducer(state, action) {
    const newState = [...state];
    if (action.type === 'remove') {
      const newList = newState.filter((todo) => todo.id !== action.id);
      return newList;
    } else if (action.type === 'done') {
      const newList = newState.map(item => {
        if (item.id === action.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
      return newList;
    } else if (action.type === 'add') {
      const newList = [...newState, action];
      return newList;
    } else if (action.type === 'edit') {
      return newState.map(item => {
        if (item.id === action.id) {
          return {...item, title: action.title}
        }
        return item;
      })
    }

    return newState;
  }
  
  function onAdd(input,id) {
    dispatch({type: 'add', title: input, completed: false, id: id});
  }

  function onRemove (title, id) {
    dispatch({type: 'remove', title: title, id: id});
  }
  function onDone (title, completed, id) {
    dispatch({type: 'done', title: title, completed: completed, id: id});
  }

  function onEdit (title, id) {
    dispatch({type: 'edit', title: title, id: id});
  }
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
      />
    </div>
  );
}

export default App;
