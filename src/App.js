import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  return (
    <div>
      <Header />
      <TodoInput />
      <h3>Erledigt</h3>
      <TodoList />
    </div>
  );
}

export default App;
