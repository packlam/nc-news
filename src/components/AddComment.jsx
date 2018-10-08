import React from 'react';
import './AddComment.css';
import * as api from '../api';

class AddComment extends React.Component {
  state = {
    commentText: ''
  }

  render() {
    return (
      <div className="add-comment">
        <h3>Add new comment:</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.commentText} onChange={(e) => this.handleChange(e.target.value)} />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    )
  }

  handleChange = (commentText) => {
    this.setState({ commentText })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { articleId, userId } = this.props

    const newComment = {
      body: this.state.commentText,
      belongs_to: articleId,
      created_by: userId
    }

    api.addComment(articleId, newComment)
    .then(() => {
      this.props.toggleSubmitted()
      this.setState({ commentText: '' })
    })
    .catch(console.log)
  }
}

export default AddComment;