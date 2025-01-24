import React, { useState, useEffect } from "react";
import PostList from "./PostList";

  function NewsFeed() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      // Fetch posts
      const randomPosts = [
        { id: 1, profilePicture: "https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg", user: "Lilian Kelly", content: "It's such a beautiful day!", likes: 15, timestamp: "5 minutes ago" },
        { id: 2, profilePicture: "https://img.freepik.com/premium-vector/handsome-black-man-with-beard-hoodie_1149118-64.jpg?semt=ais_hybrid", user: "Ian Miles", content: "I love coding so much!", likes: 100, timestamp: "Just now" },
      ];
      setPosts(randomPosts);
    }, []);
    
    // Render the News feed
  return (
    <div className="news-feed">
      <h2>Your News Feed</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default NewsFeed;