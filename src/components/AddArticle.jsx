import React from 'react';
import './AddArticle.css';
import * as api from '../api';
import { Redirect } from 'react-router-dom';

class AddArticle extends React.Component {
  state = {
    articleTopic: '',
    articleTitle: '',
    articleText: '',
    redirect: ''
  }

  render() {
    return (
      <div className="add-article">
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <select 
            name="topics"
            value={this.state.articleTopic}
            onChange={(e) => this.handleTopicChange(e.target.value)}
          >
            <option value="">Please select a topic</option>
            <option value="coding">Coding</option>
            <option value="cooking">Cooking</option>
            <option value="football">Football</option>
          </select>
          <br/>
          <input
            type="text"
            placeholder="Article Title"
            value={this.state.articleTitle}
            onChange={(e) => this.handleTitleChange(e.target.value)}
          />
          <br/>
          <textarea
            placeholder="Article Text"
            value={this.state.articleText}
            onChange={(e) => this.handleTextChange(e.target.value)}
          />
          <br/>
          <button>Submit</button>
        </form>
        {this.state.redirect && <Redirect to={this.state.redirect} />}
      </div>
    )
  }

  handleTopicChange = (articleTopic) => {
    this.setState({ articleTopic })
  }

  handleTitleChange = (articleTitle) => {
    this.setState({ articleTitle })
  }

  handleTextChange = (articleText) => {
    this.setState({ articleText })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { articleTitle, articleText, articleTopic } = this.state;
    const userId = this.props.currentUser._id;

    if (!articleTopic) {
      alert('You must select a topic')
    }
    else if (!articleTitle) {
      alert('You must provide an article title')
    }
    else if (!articleText) {
      alert('You must provide an article body')
    }
    else if (!userId) {
      alert('You must be logged in to post a new article')
    }
    else {
      const newArticle = {
        title: articleTitle,
        body: articleText,
        belongs_to: articleTopic,
        created_by: userId
      }
  
      api.addArticle(articleTopic, newArticle)
      .then(({article}) => {
        this.setState({
          redirect: `/topics/${articleTopic}/${article._id}`
        })
      })
      .catch(console.log)
    }
  }
}

export default AddArticle;