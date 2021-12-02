import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import {MdDone} from 'react-icons/md';
import '../scss/todoItem.scss';
function TodoItem(props) {

  const { title, completed } = props.todo;

  return (
    <li className={title}>
      {title}
      {completed} 
      <RiCloseCircleLine /> 
      <TiEdit />
      <MdDone />
    </li>
  )
}

export default TodoItem
