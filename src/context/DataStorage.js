import { createContext, useContext, useState } from 'react';

const DataStorage = createContext();

function AppState(props) {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [list, setList] = useState([]);

  function getUser() {
    fetch(process.env.REACT_APP_FETCH_URL_USER + `/${userId}`)
      .then((response) => response.json())
      .then((data) => setList(data.user.todos));
  }

  function postTodo(input, inputStartDate, inputEndDate) {
    console.log('userid', userId);
    fetch(process.env.REACT_APP_FETCH_URL_TODO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.token}`,
      },
      body: JSON.stringify({
        title: input,
        startDate: inputStartDate,
        endDate: inputEndDate,
        completed: false,
        user: userId,
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          getUser(userId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteTodo(id) {
    fetch(process.env.REACT_APP_FETCH_URL_TODO + `/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          getUser(userId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateTodo(id, input, inputStartDate, inputEndDate, completed) {
    fetch(process.env.REACT_APP_FETCH_URL_TODO + `/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.token}`,
      },
      body: JSON.stringify({
        title: input,
        startDate: inputStartDate,
        endDate: inputEndDate,
        completed: completed,
        user: userId,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          getUser(userId);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <DataStorage.Provider
      value={{
        list,
        setList,
        setUserId,
        userId,
        postTodo,
        updateTodo,
        deleteTodo,
        setUserName,
        userName,
      }}
    >
      {props.children}
    </DataStorage.Provider>
  );
}

function useAppData() {
  return useContext(DataStorage);
}

export { AppState, useAppData, DataStorage };
