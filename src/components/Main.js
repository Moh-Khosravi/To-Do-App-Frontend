import '../scss/main.scss';



const restoredItem = localStorage.getItem('todo');
const todo = restoredItem ? JSON.parse(restoredItem) : [];
const inputItem = document.querySelector('.inputItem');
const liste = document.querySelector('.todo-list');
const clear = document.querySelector('.clear');
function addToList () {
  todo.push(inputItem.value);
  localStorage.setItem('todo', JSON.stringify(todo));
}
function clearList() {
  const countChild = liste.childElementCount;
  if (countChild > 0) {
    const child = liste.children;
    for (let i = 0; i < countChild; i++) {
      liste.removeChild(child[i]);
    }
  }
}
clear.addEventListener('click', clearList());

function showList () {
  clearList();
  if (todo.length === 0) {
    const li = document.createElement('li');
    li.innerHTML = 'No tasks to show';
    liste.appendChild(li);
  } else {
    todo.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      liste.appendChild(li);
    });
  }
 
};


function Main () {
  return (
    <div className="main-container">
      <h1>Todo Input</h1>
      <div className="container-submit">
        <input type="text" className="inputItem"/>
        <button className="btn" onClick={addToList}>Add Item</button>
        <button className="btn clear" onClick={showList}>Show all tasks</button>
      </div>
      <ul className="todo-list"></ul>
    </div>
  );
}


export default Main;