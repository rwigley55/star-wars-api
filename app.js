//Create a button for each movie title
//When the button is pressed, the opening crawl displays on the page

const btnContainer = document.querySelector("#btn-container");
const crawlContainer = document.querySelector("#opening-crawl");

const getMovies = async () => {
  const res = await axios.get("https://swapi.dev/api/films/");
  movieButtons(res.data.results);
};

const createCrawl = (film) => {
  const newCrawl = document.createElement("div");
  const newTitle = document.createElement("h2");
  newTitle.setAttribute("id", "movie-title");
  newCrawl.setAttribute("id", "movie-crawl");
  newTitle.innerText = film.title;
  newCrawl.innerText = film.opening_crawl;
  crawlContainer.append(newTitle);
  crawlContainer.append(newCrawl);
};

const clearCrawl = () => {
  const existingCrawl = document.querySelector("#movie-crawl");
  const existingTitle = document.querySelector("#movie-title");
  if (existingCrawl) {
    existingCrawl.remove();
    existingTitle.remove();
  }
};

const movieButtons = (films) => {
  for (let film of films) {
    if (film.title) {
      const newBtn = document.createElement("button");
      newBtn.innerText = film.title;
      btnContainer.append(newBtn);
      newBtn.addEventListener("click", () => {
        clearCrawl();
        createCrawl(film);
      });
    }
  }
};
getMovies();
