import React from 'react';
import './Comment.css';
import VoteControl from './VoteControl'
import User from './User';
import dayjs from 'dayjs'

const Comment = ({ comment }) => {
  const { votes, _id, body, created_at, created_by } = comment;
  return (
    <div className="comment-container">
      <VoteControl votes={votes} itemType={'comment'} itemId={_id} />
      <div className="comment-container-right">
        <div className="comment-text">{body}</div>
        <div className="comment-date">{dayjs(created_at).toString()}</div>
        <User user={created_by}/>
      </div>
    </div>
  )
};

export default Comment;