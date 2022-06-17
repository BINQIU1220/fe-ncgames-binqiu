import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://be-nc-games-binqiu.herokuapp.com/api/",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (sort_by) => {
  let url = "/reviews/";
  console.log(sort_by, "<<<<sort in api getallreviews");
  return gamesApi
    .get(url, { params: { sort_by } })
    .then((res) => {
      return res.data.reviews;
    })
    .catch((err) => {
      console.dir(err);
    });
};

export const getReviewsByCategory = (category, sort_by) => {
  let url = "/reviews/";
  console.log(sort_by, "<<<<sort in api getreviewbycategory");
  console.log(category, "<<<<category in api getreviewbycategory");
  return gamesApi
    .get(url, { params: { category, sort_by } })
    .then((res) => {
      return res.data.reviews;
    })
    .catch((err) => {
      console.dir(err);
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
