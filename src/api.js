import axios from 'axios';

const API_URL = 'https://pacific-retreat-67567.herokuapp.com/api';

export const getArticles = () => {
  return axios.get(`${API_URL}/articles`).then(({data}) => data.articles)
}

export const getArticlesByTopicSlug = topicSlug => {
  return axios.get(`${API_URL}/topics/${topicSlug}/articles`).then(({data}) => data.articles)
}

export const getArticleById = articleId => {
  return axios.get(`${API_URL}/articles/${articleId}`).then(({data}) => data.article)
}

export const getTopics = () => {
  return axios.get(`${API_URL}/topics`).then(({data}) => data.topics)
}

export const getCommentsByArticleId = articleId => {
  return axios.get(`${API_URL}/articles/${articleId}/comments`).then(({data}) => data.comments)
}

export const getUserByUsername = username => {
  return axios.get(`${API_URL}/users/${username}`).then(({data}) => data.user)
}

export const updateVoteCount = (itemType, itemId, vote) => {
  return axios.patch(`${API_URL}/${itemType}s/${itemId}?vote=${vote}`)
}

export const addComment = (articleId, comment) => {
  return axios.post(`${API_URL}/articles/${articleId}/comments`, comment).then(({data}) => data)
}

export const addArticle = (articleTopic, newArticle) => {
  return axios.post(`${API_URL}/topics/${articleTopic}/articles`, newArticle).then(({data}) => data )
}