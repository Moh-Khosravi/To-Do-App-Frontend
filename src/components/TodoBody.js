import '../scss/todoBody.scss'

import TodoItem from './TodoItem';

function TodoBody({ list, onRemove, onDone, onEdit }) {
  
  const todos = [...list];

  function createLi() {
    return todos.map((todo) => (
      <TodoItem 
      todo={todo} 
      onRemove={onRemove}
      onDone={onDone}
      onEdit={onEdit}
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