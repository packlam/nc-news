import React from 'react';
import Article from './Article';
import * as api from '../api'

class ArticleList extends React.Component {
  state = {
    articles: []
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {[...this.state.articles].sort((a, b) => b.votes - a.votes)
        .map(article => {
          return <Article {...article} key={article._id} fetchData={this.fetchData}/>
        })}
      </div>
    )
  }

  componentDidMount() {
    this.fetchData()
    .then(articles => this.setState({ articles }) )
    .catch(console.log)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchData()
      .then(articles => this.setState({ articles }) )
      .catch(console.log)
    }
  }

  fetchData = () => {
    if (this.props.match.path === '/') {
      return api.getArticles();
    }
    else if (this.props.match.path === '/topics/:topic_slug/') {
      return api.getArticlesByTopicSlug(this.props.match.params.topic_slug);
    }
  };
}

export default ArticleList