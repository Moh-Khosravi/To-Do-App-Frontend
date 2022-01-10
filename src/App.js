import { useReducer, useEffect } from 'react';
import Form from './components/Form';
import TodoBody from './components/TodoBody';
import DataStore from './Datastore';

function App() {

  const [list, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const restoredItem = localStorage.getItem('todoList');
    const todoList = restoredItem ? JSON.parse(restoredItem) : [];
    dispatch({ type: 'restored', payload: todoList });
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(list));
  }, [list]);

  function reducer(state, action) {
    const newState = [...state];
    if (action.type === 'remove') {
      const newList = newState.filter((todo) => todo.id !== action.payload.id);
      return newList;
    } else if (action.type === 'done') {
      const newList = newState.map(item => {
        if (item.id === action.payload.id) {
          return {...item, completed: !item.completed};
        }
        return item;
      })
      return newList;
    } else if (action.type === 'add') {
      const newList = [...newState, action.payload];
      return newList;
    } else if (action.type === 'edit') {
      return newState.map(item => {
        if (item.id === action.payload.id) {
          return {...item, title: action.payload.title, date: action.payload.date};
        }
        return item;
      })
    } else if (action.type === 'restored') {
        return action.payload;
    }

    return newState;
  }
  
  function onAdd(input,date,id) {
    dispatch({type: 'add', payload: {title: input, date: date, completed: false, id: id}});
  }

  function onRemove (title, id) {
    dispatch({type: 'remove', payload: {title: title, id: id}});
  }
  function onDone (title, completed, id) {
    dispatch({type: 'done', payload: {title: title, completed: completed, id: id}});
  }

  function onEdit (title, date, id) {
    dispatch({type: 'edit', payload: {title: title, date: date, id: id}});
  }
  return (
    <div className='container-app'>
      <DataStore.Provider value={{list, onAdd, onRemove, onDone, onEdit}}>
        <Form />
        <TodoBody />  
      </DataStore.Provider>
    </div>
  );
}

export default App;
