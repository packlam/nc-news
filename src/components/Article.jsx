import React from 'react';
import './Article.css';
import VoteControl from './VoteControl';
import User from './User';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const Article = ({ title, body, votes, created_at, belongs_to, created_by, _id, comment_count }) => {
  return (
    <div className="article">
      <VoteControl votes={votes} itemType={'article'} itemId={_id} />
      <div className="article-content">
        <Link to={`/topics/${belongs_to}/${_id}`}>
          <p className="title">{belongs_to}: <strong>{title}</strong></p>
          <p>{body}</p>
          <p className="comment-count">{comment_count} comments | {dayjs(created_at).toString()}</p>
        </Link>
        <User user={created_by} />
      </div>
    </div>
  )
}

export default Article;