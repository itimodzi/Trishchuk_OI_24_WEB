import { useState } from 'react';

function CommentList({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState('');

  const handleAdd = () => {
    if (newComment.trim()) {
      onAddComment(newComment.trim());
      setNewComment('');
    }
  };

  return (
    <div className="comments">
      <h4>Коментарі</h4>
      {comments.map((comment, i) => (
        <p key={i}>{comment}</p>
      ))}
      <input
        type="text"
        className="comment-input"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Додати коментар"
      />
      <button className="comment-btn" onClick={handleAdd}>Додати</button>
    </div>
  );
}

export default CommentList;