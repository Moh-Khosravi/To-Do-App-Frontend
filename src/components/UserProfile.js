import React from 'react';
import Logo from '../image/Logo-White.png';
import MenuBar from './MenuBar.js';
import { useAppData } from '../context/DataStorage.js';
import '../scss/UserProfile.scss';

function UserProfile() {
  const { user } = useAppData();
  return (
    <div className="container-userpage">
      <img className="logo2" src={Logo} alt="" />
      <MenuBar />
      <div className="h-100 container-userprofile">
        <div className="text-center card-box ">
          <div className="member-card pt-2 pb-2 d-flex flex-column justify-content-center align-items-center">
            <div className="container-userprofile-img">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                className="rounded-circle img-thumbnail"
                alt="profile"
              />
            </div>
            <div className="">
              <h2 className="userName fs-1">
                {user.firstName + ' ' + user.lastName}
              </h2>
              <p className="text-muted fs-2">
                Id: <span>| </span>
                <span>{user.id}</span>
                <p className="text-muted">
                  Email: <span>| </span>
                  <span>{user.email}</span>
                </p>
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light fs-3"
            >
              Edit Profile
            </button>
            <div className="mt-4 fs-3 ">
              <div className="container-todo-info">
                <div className="col-4">
                  <div className="mt-3">
                    <h4 className="fs-3">{user.todos.length}</h4>
                    <p className="mb-0 text-muted">To dos</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mt-3">
                    <h4 className="fs-3">
                      {
                        user.todos.filter((todo) => todo.completed === true)
                          .length
                      }
                    </h4>
                    <p className="mb-0 text-muted">Completed to do</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="mt-3">
                    <h4 className="fs-3">
                      {
                        user.todos.filter((todo) => todo.completed === false)
                          .length
                      }
                    </h4>
                    <p className="mb-0 text-muted">Open to do</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
