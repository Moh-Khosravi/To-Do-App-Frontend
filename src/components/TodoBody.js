import '../scss/todoBody.scss'
import TodoItem from './TodoItem';

function TodoBody({ list, setList}) {

  const todos = list;
  const openTodo = todos.filter(item => !item.completed);
  const completedTodo = todos.filter(item => item.completed);

  function createLi(param) {
    return param.map((todo, index) => (
      <TodoItem todo={todo} list={list} setList={setList} key={index}/>
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