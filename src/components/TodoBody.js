import '../scss/todoBody.scss';
import TodoItem from './TodoItem';
import { useAppData } from '../context/DataStorage.js';

function TodoBody() {
  const { list } = useAppData();
  const todos = [...list];

  function createLi() {
    return todos.map((todo) => <TodoItem todo={todo} />);
  }
  return (
    <div className="container-todobody">
      <ul className="list-todo">{createLi()}</ul>
    </div>
  );
}

export default TodoBody;
