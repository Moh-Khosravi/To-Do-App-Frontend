import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import {MdDone} from 'react-icons/md';

function TodoItem({ todo, list, setList}) {

  let {title, completed} = todo;

  function handleComplete() {
    setList(
      list.map(item => {
        if (item.title === title) {
          return {...item, completed: !completed}
        }
        return item;
      })
    )
  }

  function handleDelete() {
    setList(list.filter(item => item.title !== title));
  }

  function handleEdit() {
    console.log('edit');
  }
  return (
    <li className={title}>
      <span>{title}</span>
      <div className="container-icons">
        <RiCloseCircleLine className="close" onClick={handleDelete}/> 
        <TiEdit className="edit" onClick={handleEdit}/>
        <MdDone className="done" onClick={handleComplete}/>
      </div>
    </li>
  )
}

export default TodoItem
