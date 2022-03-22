import Form from './FormInput.js';
import TodoBody from './TodoBody.js';
import Logout from './Logout.js';

function MainPage() {
  return (
    <div className="container-app">
      <Logout />
      <Form />
      <TodoBody />
    </div>
  );
}

export default MainPage;
