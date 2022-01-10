import React from 'react';
import {MdDeleteForever} from 'react-icons/md';
import {MdEditNote} from 'react-icons/md';
import {MdDoneAll} from 'react-icons/md';
import { useState } from 'react';
import DataStore from '../Datastore';
import { useContext } from 'react';

function TodoItem({ todo }) {
  const { onRemove, onDone, onEdit } = useContext(DataStore);
  
  let { title, date, completed, id } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [dateChange, setDateChange] = useState(date);
  const [titleChange, setTitleChange] = useState(title);

  function handleDelete () {
    onRemove(title, id);
  }
  function handleDone () {
    onDone(title, completed, id);
  }

  function changeTitle (event) {
    setTitleChange(event.target.value);
    
  }
  function changeDate(event) {
    setDateChange(event.target.value);
    
  }

  function handleEdit () {
    setIsEditing(!isEditing);
    onEdit(titleChange, dateChange, id)
  }
  function dateFormat () {
    const newDate = dateChange.split('-');
    const newFormat = newDate.reverse().join('-');
    return newFormat;
  }
  function addNewInput () {
    if (!isEditing) {
      return (
        <div className='content'>
          <p className='title'>{title}</p>
          <p className='date'>{dateFormat()}</p>
        </div>)
    } else {
      return (
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" onChange={changeTitle} value={titleChange} />
          <input type="date" onChange={changeDate} value={dateChange} />
        </form>
      )
    }
  }
  return (
    <li className={completed ? 'completed' : 'not-compl'}>
      {addNewInput()}
      <div className="container-icons">
        <MdDeleteForever className="close" onClick={handleDelete} /> 
        <MdEditNote className="edit" onClick={handleEdit} />
        <MdDoneAll className="done" onClick={handleDone} />
      </div>
    </li>
  )
}

export default TodoItem
