import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import {MdEditNote} from 'react-icons/md';
import {MdDoneAll} from 'react-icons/md';
import {useState } from 'react';
function TodoItem({ todo, onRemove, onDone, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  let { title, date, completed, id } = todo;
  const [dateChange, setDateChange] = useState(date);
  const [titleChange, setTitleChange] = useState(title);
  function handleDelete () {
    onRemove(title, id);
  }
  function handleDone () {
    onDone(title, completed, id);
  }
  function handleEdit () {
    onEdit(titleChange, dateChange, id)
  }
  function changeTitle (event) {
    setTitleChange(event.target.value);
  }
  function changeDate(event) {
    setDateChange(event.target.value);
  }

  function addNewInput () {
    if (!isEditing) {
      return (
        <div className='content'>
          <p className='title'>{title}</p>
          <p className='date'>{date}</p>
        </div>)
    } else {
      return (
        <div>
          <input type="text" onChange={changeTitle} value={title} />
          <input type="date" onChange={changeDate} value={date} />
          
        </div>
      )
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
