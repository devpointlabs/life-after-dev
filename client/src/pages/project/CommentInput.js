import React, { useState } from "react";

export default function CommentInput({ id }) {
  const [comment, setComment] = useState("");

  const addComment = () => {};
  return (
    <div className="commentInput">
      <textarea
        className="commentInput__textarea"
        rows="1"
        placeholder="write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className="commentInput__btn">Post</button>
    </div>
  );
}
