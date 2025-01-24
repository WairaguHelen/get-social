import React from "react";

function CommentSection({ comments }) {
    return (
        <div className="comments-section">
            {comments.length < 1 ? (
                <p>No comments yet. Write the first comment!</p>
            ) : (
                <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
                </ul>
            )}
        </div>
      );
}

export default CommentSection;