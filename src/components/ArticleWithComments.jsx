import React from 'react';
import * as api from '../api';
import Article from './Article';
import CommentList from './CommentList';
import AddComment from './AddComment';

class ArticleWithComments extends React.Component {
  state = {
    article: {},
    comments: [],
    commentSubmitted: false
  }

  render() {
    console.log(this.props)
    return (
      <div className="article-with-comments">
        {this.state.article.title && <Article {...this.state.article} /> }
        {
          this.state.article.title
          && this.props.currentUser._id
          &&
          <AddComment
            articleId={this.state.article._id}
            userId={this.props.currentUser._id}
            pathname={this.props.location.pathname}
            toggleSubmitted={this.toggleSubmitted}
          />
        }
        {this.state.comments.length > 0 && <CommentList comments={this.state.comments}/> }
      </div>
    )
  }

  componentDidMount() {
    this.fetchArticle()
    this.fetchComments()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.commentSubmitted !== this.state.commentSubmitted) {
      this.fetchComments()
    }
  }

  fetchArticle() {
    api.getArticleById(this.props.match.params.article_id)
    .then(article => this.setState({ article }))
  }

  fetchComments() {
    api.getCommentsByArticleId(this.props.match.params.article_id)
    .then(comments => this.setState({ comments }))
  }

  toggleSubmitted = () => {
    this.setState({ commentSubmitted: true })
  }
}

export default ArticleWithComments;