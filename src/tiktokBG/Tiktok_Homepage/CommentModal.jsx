import React, { useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (commentText) => {
    setComments([...comments, { id: comments.length + 1, text: commentText, likes: 0, replies: [] }]);
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  const handleAddReply = (commentId, replyText) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId ? { ...comment, replies: [...comment.replies, { id: comment.replies.length + 1, text: replyText, likes: 0 }] } : comment
      )
    );
  };

  const handleDeleteReply = (commentId, replyId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId ? { ...comment, replies: comment.replies.filter((reply) => reply.id !== replyId) } : comment
      )
    );
  };

  const handleLikeComment = (commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId && !comment.liked
          ? { ...comment, likes: comment.likes + 1, liked: true }
          : comment
      )
    );
  };

  const handleLikeReply = (commentId, replyId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: comment.replies.map((reply) =>
                reply.id === replyId && !reply.liked ? { ...reply, likes: reply.likes + 1, liked: true } : reply
              ),
            }
          : comment
      )
    );
  };

  return (
    <div className="comments-page">
      <h1>Comments</h1>
      <CommentForm onAddComment={handleAddComment} />
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onDeleteComment={handleDeleteComment}
          onAddReply={handleAddReply}
          onDeleteReply={handleDeleteReply}
          onLikeComment={handleLikeComment}
          onLikeReply={handleLikeReply}
        />
      ))}
    </div>
  );
};

const CommentForm = ({ onAddComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      onAddComment(commentText);
      setCommentText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Add a comment"></textarea>
      <button type="submit">Comment</button>
    </form>
  );
};

const Comment = ({ comment, onDeleteComment, onAddReply, onDeleteReply, onLikeComment, onLikeReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleAddReply = (e) => {
    e.preventDefault();
    if (replyText.trim() !== '') {
      onAddReply(comment.id, replyText);
      setReplyText('');
    }
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
      <button onClick={() => onLikeComment(comment.id)} style={{ color: comment.liked ? 'red' : 'black' }} disabled={comment.liked}>
        Like ({comment.likes})
      </button>
      <form onSubmit={handleAddReply}>
        <textarea value={replyText} onChange={(e) => setReplyText(e.target.value)} placeholder="Reply"></textarea>
        <button type="submit">Reply</button>
      </form>
      {comment.replies.map((reply) => (
        <div key={reply.id} className="reply">
          <p style={{ fontSize: '0.8em' }}>{reply.text}</p>
          <button onClick={() => onDeleteReply(comment.id, reply.id)}>Delete</button>
          <button onClick={() => onLikeReply(comment.id, reply.id)} style={{ color: reply.liked ? 'red' : 'black' }} disabled={reply.liked}>
            Like ({reply.likes})
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommentsPage;
