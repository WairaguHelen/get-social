import React, { useState } from "react";
import CommentSection from "./CommentSection";
import { useNavigate } from "react-router-dom";

function Post({ post }) {
  const [likes, setLikes] = useState(post.likes || 0);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate(`/profile/${post.user.id}`, { state: { user: post.user } });
  };

  const manageLikes = () => {
    setLikes(likes + 1);
  };

  const handleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.profilePicture} width='90px' />
        <div className="user-status">
          <button onClick={handleUserClick} className="post-user">{post.user}</button>
          <button onClick={handleFollowToggle} className="follow-button">
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
        </div>
        <p className="timestamp">{post.timestamp}</p>
      </div>
      <p>{post.content}</p>
      <div className="post-actions">
        <button onClick={manageLikes}>{likes} Likes</button>
        <button onClick={handleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>
      
      {/* Toggle Comments */}
      {showComments && (
        <div className="comments-section">
          <div className="add-comment">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
            ></textarea>
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        {/* Comments Section */}
        <CommentSection comments={comments} />
        </div>
      )}
    </div>
  );
}

export default Post;