import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function ProfileHeader({ user }) {
  const location = useLocation();
  const navigate = useNavigate();

  const goToEditProfile = () => {
    navigate(`/edit-profile`, { state: { user } });
  };

  

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.profilePicture} alt={`${user.name}'s profile`} className="profile-picture" />
        <div className="align-buttons">
          <h1>{user.name}</h1>
          <button onClick={goToEditProfile} className="edit-profile-btn">Edit Profile</button>
        </div>
        <p>@{user.username}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;