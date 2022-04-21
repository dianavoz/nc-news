import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://api-backend-nc-news.herokuapp.com/api",
});

export const getTopicsApi = () => {
  return articlesApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic) => {
  return articlesApi
    .get("/articles", {
      params: {
        topic,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
