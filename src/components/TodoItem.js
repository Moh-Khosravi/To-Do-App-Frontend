import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { MdEditNote } from 'react-icons/md';
import { MdDoneAll } from 'react-icons/md';
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
  function handleDone() {
    updateTodo(_id, titleChange, startDateChange, endDateChange, !completed);
  }

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
        <form className="form-edit" onSubmit={(e) => e.preventDefault()}>
          <input type="text" onChange={changeTitle} value={titleChange} />
          <div className="date-edit">
            <input
              className="date-edit-start"
              type="date"
              onChange={changeStartDate}
              value={startDateChange}
            />
            <input
              className="date-edit-end"
              type="date"
              onChange={changeEndDate}
              value={endDateChange}
            />
          </div>
        </form>
      );
    }
  }
  return (
    <li className={completed ? 'completed' : 'not-compl'}>
      {addNewInput()}
      <div className="container-icons">
        <MdDeleteForever className="close" onClick={handleDelete} />
        <MdEditNote
          className={!isEditing ? 'not-edit' : 'edit'}
          onClick={handleEdit}
        />
        <MdDoneAll
          className={!completed ? 'not-done' : 'done'}
          onClick={handleDone}
        />
      </div>
    </li>
  );
}

export default TodoItem;
