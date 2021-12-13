import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import {MdEditNote} from 'react-icons/md';
import {MdDoneAll} from 'react-icons/md';
import {useState } from 'react';
function TodoItem({ todo, onRemove, onDone, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  let { title, completed, id } = todo;

  function handleDelete () {
    onRemove(title, id);
  }
  function handleDone () {
    onDone(title, completed, id);
  }
  function handleEdit (event) {
    onEdit(event.target.value, id)
  }
  function addNewInput () {
    if (!isEditing) {
      return <span>{title}</span>
    } else {
      return <input type="text" onChange={handleEdit} value={title} />
    }
  }
  return (
    <li className={completed ? 'completed' : 'not-compl'}>
      {addNewInput()}
      <div className="container-icons">
        <MdDeleteForever className="close" onClick={handleDelete} /> 
        <MdEditNote className="edit" onClick={() => setIsEditing(!isEditing)} />
        <MdDoneAll className="done" onClick={handleDone} />
      </div>
    </li>
  )
}

export default TodoItem
