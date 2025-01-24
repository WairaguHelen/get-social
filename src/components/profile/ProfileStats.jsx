import React from "react";

function ProfileStats({ user }) {
  return (
    <div className="profile-stats">
      <div>
        <strong>{user.followers}</strong>
        <p>Followers</p>
      </div>
      <div>
        <strong>{user.following}</strong>
        <p>Following</p>
      </div>
      <div>
        <strong>{user.posts}</strong>
        <p>Posts</p>
      </div>
    </div>
  );
}

export default ProfileStats;
