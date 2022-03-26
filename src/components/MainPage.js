import Form from './FormInput.js';
import TodoBody from './TodoBody.js';
import MenuBar from './MenuBar.js';
import Logo from '../image/Logo-White.png';

function MainPage() {
  return (
    <div className="container-app">
      <img className="logo2" src={Logo} alt="" />
      <MenuBar />
      <Form />
      <TodoBody />
    </div>
  );
}

export default MainPage;
