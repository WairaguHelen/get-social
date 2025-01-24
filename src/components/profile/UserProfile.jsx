import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import UserPosts from "./UserPosts";

function UserProfile() {
  const user = {
    name: "Heily Wairagu",
    username: "heilywairagu",
    bio: "Live your best life!",
    profilePicture: "https://i.pinimg.com/736x/21/33/6a/21336ad979d669831e16a4a5c7811f2a.jpg",
    followers: 10000,
    following: 30,
    posts: 15,
  };

  return (
    <div className="user-profile">
      <ProfileHeader user={user} />
      <ProfileStats user={user} />
      <UserPosts userId={1} />
    </div>
  );
}

export default UserProfile;

