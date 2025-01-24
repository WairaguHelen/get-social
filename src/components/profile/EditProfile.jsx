import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const [name, setName] = useState(user.name || "");
  const [username, setUsername] = useState(user.username || "");
  const [bio, setBio] = useState(user.bio || "");
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !username.trim()) {
      alert("Name and username cannot be empty.");
      return;
    }

    const updatedUser = {
      ...user,
      name,
      username,
      bio,
      profilePicture,
    };

    // Navigate back to UserProfile with updated data
    navigate(`/profile`, { state: { user: updatedUser } });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="edit-profile">
        <button className="profile-edit-button" onClick={goBack}>← Back</button>
        <h2>Edit Profile</h2> 
        <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Bio:</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Profile Picture URL:</label>
          <input
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <button type="submit" className="save-button profile-edit-button">Done</button>
      </form>
    </div>
  );
};

export default EditProfile;