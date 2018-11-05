import React from 'react';
import { Link } from 'react-router-dom';
import './TopicList.css';
import * as api from '../api';

class TopicList extends React.Component {
  state = {
    topics: []
  }

  render() {
    return (
      <div className="topic-list">
        <h3>Trending Topics</h3>
        {this.state.topics.map(topic => {
          return (
            <Link to={`/topics/${topic.slug}`} key={topic.slug}>
              <p>{topic.title}</p>
            </Link>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    api.getTopics()
    .then(topics => this.setState({ topics }))
  }
}

export default TopicList;