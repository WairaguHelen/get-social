import React from "react";

function Post({ post }) {
  return (
    <div className="post">
      <p>{post.content}</p>
      <small>{new Date(post.timestamp).toLocaleString()}</small>
    </div>
  );
}

export default Post;
