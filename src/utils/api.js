import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://be-nc-games-workplace.onrender.com/api",
});

export const getCategories = () => {
  return gamesApi
    .get("/categories")
    .then((res) => {
      return res.data.categories;
    })
    .catch((err) => {
      window.location = "/opps";
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
      window.location = "/opps";
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
      window.location = "/oops";
    });
};

export const getReviewsByIdy = (review_id) => {
  return gamesApi
    .get(`reviews/${review_id}`)
    .then((res) => {
      return res.data.review;
    })
    .catch(() => {
      window.location = "/oops";
    });
};

export const patchVotesById = (inc_votes, review_id) => {
  return gamesApi.patch(`reviews/${review_id}`, { inc_votes }).then((res) => {
    return res;
  });
};

export const getAllCommentsById = (review_id) => {
  return gamesApi
    .get(`reviews/${review_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
    .catch(() => {
      window.location = "/oops";
    });
};

export const postComment = (body, review_id) => {
  return gamesApi.post(`reviews/${review_id}/comments`, {
    username: "cooljmessy",
    body: body,
  });
};

export const deleteCommentsById = (comment_id) => {
  return gamesApi.delete(`comments/${comment_id}`);
};
