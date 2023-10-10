import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  const handleSettings = () => {
    // Handle settings logic here
  };

  return (
    <div className="w-100 bg-dark-custom d-flex justify-content-between align-items-center p-3">
      <div className="search-bar d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input
          className="bg-transparent border border-0 ml-5 fs-4"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="profile rounded-circle bg-white" onClick={toggleDropdown}>
        <img src="profile-photo.jpg" alt="Profile" className="profile-photo" />
        {/* {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <li onClick={handleSettings}>Settings</li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
