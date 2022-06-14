import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://be-nc-games-binqiu.herokuapp.com/api/",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = () => {
  let url = "/reviews/";
  return gamesApi.get(url).then((res) => {
    return res.data.reviews;
  });
};

export const getReviewsByCategory = (category) => {
  let url = "/reviews/";
  return gamesApi.get(url, { params: { category } }).then((res) => {
    return res.data.reviews;
  });
};

export const getReviewsByIdy = (review_id) => {
  return gamesApi.get(`reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};
