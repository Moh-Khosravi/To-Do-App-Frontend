import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { openTodo } from './components/TodoInput';
/* import { completedTodo } from 'TodoInput'; */
function App() {
  return (
    <div>
      <Header />
      <TodoInput />
      <TodoList todos={openTodo} />
    </div>
  );
}

export default App;
