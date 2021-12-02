import '../scss/todoList.scss'
import TodoItem from './TodoItem';

function TodoList(props) {

  const todos = props.todos;
  console.log('hier', todos);

  function createLi() {
    return todos.map((todo, index) => (<TodoItem todo={todo} key={index}/>))
  }

  return (
    <ul className="container-todolist">
      {createLi()}
    </ul>
  )
}

export default TodoList;