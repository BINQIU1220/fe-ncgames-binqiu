import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://be-nc-games-binqiu.herokuapp.com/api/",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (order, sort_by) => {
  let url = "/reviews/";

  return gamesApi
    .get(url, { params: { order, sort_by } })
    .then((res) => {
      return res.data.reviews;
    })
    .catch((err) => {
      console.dir(err);
    });
};

export const getReviewsByCategory = (category, order, sort_by) => {
  let url = "/reviews/";

  return gamesApi
    .get(url, { params: { category, order, sort_by } })
    .then((res) => {
      return res.data.reviews;
    })
    .catch((err) => {
      console.log(err, "<<<<err in api");
    });
};

export const getReviewsByIdy = (review_id) => {
  return gamesApi.get(`reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const patchVotesById = (inc_votes, review_id) => {
  return gamesApi.patch(`reviews/${review_id}`, { inc_votes }).then((res) => {
    return res;
  });
};

export const getAllCommentsById = (review_id) => {
  return gamesApi.get(`reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postComment = (body, review_id) => {
  return gamesApi.post(`reviews/${review_id}/comments`, {
    username: "cooljmessy",
    body: body,
  });
};

export const deleteCommentsById = (comment_id) => {
  console.log(comment_id);
  return gamesApi.delete(`comments/${comment_id}`);
};
