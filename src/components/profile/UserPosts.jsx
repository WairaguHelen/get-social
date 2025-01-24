import React, { useEffect, useState } from "react";

function UserPosts({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Mock fetching posts
    const fetchPosts = async () => {
      const randPosts = [
        { id: 1, content: "It's a beautiful day!" },
        { id: 2, content: "I prefer a beach vacation to a jungle vacation" },
        { id: 3, content: "I am in love with the React framework!" },
        { id: 4, content: "I want to watch something fun. Recommend your favorite sitcoms" },
        { id: 5, content: "What would you rather listen to when working? A podcast or music?" },
        { id: 6, content: "Kuosa vs. kusota. What's the difference" },
        { id: 7, content: "Ngl, coffee is an overrated drinks" },
        { id: 8, content: "Oh, and wings too! Overrated!" },
      ];
      setPosts(randPosts);
    };    

    fetchPosts();
  }, [userId]);

  return (
    <div className="user-posts">
      <h2>Your Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default UserPosts;