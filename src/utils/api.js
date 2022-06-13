import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://be-nc-games-binqiu.herokuapp.com/api/",
});

export const getCategories = () => {
  return gamesApi.get("categories").then((res) => {
    return res.getCategories;
  });
};

export const getReviews = () => {
  let url = "/reviews";
  return gamesApi.get(url).then((res) => {
    return res.data.reviews;
  });
};
