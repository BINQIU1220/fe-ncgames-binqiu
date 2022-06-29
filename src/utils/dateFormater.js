export const dateFormater = (date) => {
  let dateToShow = {};

  let dateSplited = date.split("T");

  dateToShow.date = dateSplited[0];
  dateToShow.time = dateSplited[1].split(":00")[0].slice(0, 5);

  if (dateToShow.time.length === 2) {
    dateToShow.time += ":00";
  }

  return dateToShow;
};
