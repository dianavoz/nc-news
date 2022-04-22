import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://api-backend-nc-news.herokuapp.com/api",
});

export const getTopicsApi = () => {
  return articlesApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic, sort_by, order) => {
  return articlesApi
    .get("/articles", {
      params: {
        topic,
        sort_by,
        order,
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

export const patchArticleVote = (article_id, votes) => {
  return articlesApi.patch(`/articles/${article_id}`, {
    inc_votes: 1,
  });
};

// export const getComments = (article_id) => {
//   return articlesApi
//     .get(`/articles/${article_id}/comments`)
//     .then(({ data }) => {
//       return data.comments;
//     });
// };
