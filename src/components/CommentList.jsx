import React from 'react';
import Comment from './Comment';
import './CommentList.css';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <h3>Comments ({comments.length})</h3>
      {comments.sort((a, b) => b.votes - a.votes)
      .map(comment => <Comment comment={comment} key={comment._id}/>)}
    </div>
  )
};

export default CommentList;