import '../scss/todoBody.scss'
import TodoItem from './TodoItem';

function TodoBody({ list, onRemove, onDone, onEdit, setIsOpen }) {

  const todos = list;
  const openTodo = todos.filter(item => !item.completed);
  const completedTodo = todos.filter(item => item.completed);

  function createLi(param) {
    return param.map((todo, index) => (
      <TodoItem 
      todo={todo} 
      onRemove={onRemove}
      onDone={onDone}
      onEdit={onEdit}
      setIsOpen={setIsOpen}
      key={index}
      />
    ))
  }

  return (
    <div className="container-todobody">
      <h2>Open Todo</h2>
      <ul>
        {createLi(openTodo)}
      </ul>
      <h2>Completed</h2>
      <ul>
        {createLi(completedTodo)}
      </ul>
    </div>
  )
}

export default TodoBody;