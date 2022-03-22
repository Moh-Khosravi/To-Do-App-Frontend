import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { MdEditNote } from 'react-icons/md';
//import { MdDoneAll } from 'react-icons/md';
import { useState } from 'react';
import { useAppData } from '../context/DataStorage.js';

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo } = useAppData();

  let { title, startDate, endDate, completed, _id } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [startDateChange, setStartDateChange] = useState(startDate);
  const [endDateChange, setEndDateChange] = useState(endDate);
  const [titleChange, setTitleChange] = useState(title);

  function handleDelete() {
    deleteTodo(_id);
  }
  /*   function handleDone() {
    onDone(title, completed, id);
  } */

  function changeTitle(event) {
    setTitleChange(event.target.value);
  }
  function changeStartDate(event) {
    setStartDateChange(event.target.value);
  }
  function changeEndDate(event) {
    setEndDateChange(event.target.value);
  }
  function handleEdit() {
    setIsEditing(!isEditing);
    updateTodo(_id, titleChange, startDateChange, endDateChange, completed);
  }
  function dateFormat(param) {
    const newDate = param.split('-');
    const newFormat = newDate.reverse().join('-');
    return newFormat;
  }
  function addNewInput() {
    if (!isEditing) {
      return (
        <div className="content">
          <p className="title">{title}</p>
          <div className="date">
            <p>Start: {dateFormat(startDateChange)}</p>
            <p>End: {dateFormat(endDateChange)}</p>
          </div>
        </div>
      );
    } else {
      return (
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" onChange={changeTitle} value={titleChange} />
          <input
            type="date"
            onChange={changeStartDate}
            value={startDateChange}
          />
          <input type="date" onChange={changeEndDate} value={endDateChange} />
        </form>
      );
    }
  }
  return (
    <li className={completed ? 'completed' : 'not-compl'}>
      {addNewInput()}
      <div className="container-icons">
        <MdDeleteForever className="close" onClick={handleDelete} />
        <MdEditNote className="edit" onClick={handleEdit} />
        {/* <MdDoneAll className="done" onClick={handleDone} /> */}
      </div>
    </li>
  );
}

export default TodoItem;
