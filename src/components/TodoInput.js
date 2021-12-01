import '../scss/Main.scss';



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

function showList () {
  clearList();
  if (todo.length === 0) {
    alert('No tasks to show');
  } else {
    todo.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item;
      liste.appendChild(li);
    });
  }
 
};


function TodoInput () {
  return (
    <div className="main-container">
      <h1>Todo Input</h1>
      <div className="container-submit">
        <input type="text" className="inputItem"/>
        <button className="btn" onClick={addToList}>Add Item</button>
        <button className="btn clear" onClick={showList}>Show all tasks</button>
      </div>
      
    </div>
  );
}


export default TodoInput;