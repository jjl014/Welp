import React from 'react';

const Dropdown = ({currentUser, signoff, toggleDropdown}) => {
  return (
    <div>
      <div onClick={toggleDropdown} className="dropdown-bg"></div>
      <div className="dropdown">
        <div className="dropdown-row-1">
          <div className="user-avatar-wrapper">
            <img className="user-avatar" src={currentUser.img_url}/>
          </div>
          <div className="user-name">{currentUser.username}</div>
        </div>
        <div className="dropdown-row-2" onClick={signoff}>
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
