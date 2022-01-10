import '../scss/todoBody.scss'
import TodoItem from './TodoItem';
import DataStore from '../Datastore';
import { useContext } from 'react';


function TodoBody() {
  const { list, onRemove, onDone, onEdit } = useContext(DataStore);
  const todos = [...list];

  function createLi() {
    return todos.map((todo) => (
      <TodoItem 
      todo={todo} 
      />
    ))
  }
  return (
    <div className="container-todobody">
      <ul className='list-todo'>
        {createLi()}
      </ul>
    </div>
  )
}

export default TodoBody;