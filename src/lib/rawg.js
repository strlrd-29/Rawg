const baseURL = "https://api.rawg.io/api/";

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const genres = `genres?key=${process.env.API_KEY}`;

const genresUrl = () => {
  return `${baseURL}${genres}`;
};

export { genresUrl };

export const getAllGenres = async () => {
  const result = await fetch(
    `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
  );
  return result;
};
