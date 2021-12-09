import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import {MdDone} from 'react-icons/md';
import colorGenerator from './randomColor';
function TodoItem({ todo, onRemove, onDone, onEdit, setIsOpen, key}) {

  let { title, completed } = todo;

  function handleDelete () {
    onRemove(title, completed);
  }
  function handleDone () {
    onDone(title, completed);
  }
  function handleEdit () {
    onEdit(title, completed);
  }
  const color = colorGenerator();
  const id = title + key;
  return (
    <li className={title} key={id} style={{backgroundColor: color}}>
      <span>{title}</span>
      <div className="container-icons">
        <RiCloseCircleLine className="close" onClick={handleDelete}/> 
        <TiEdit className="edit" onClick={() => setIsOpen(true)}/>
        <MdDone className="done" onClick={handleDone}/>
      </div>
    </li>
  )
}

export default TodoItem
