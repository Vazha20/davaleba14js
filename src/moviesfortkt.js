const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get popular movies on page load
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { id, title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}" data-movie-id="${id}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span >${vote_average}</span>
      </div>
    `;

    movieEl.addEventListener('click', () => {
      showMovieDetails(id, title, poster_path, overview, vote_average);
    });

    main.appendChild(movieEl);
  });
}

function showMovieDetails(id, title, poster_path, overview, vote_average) {
  main.innerHTML = '';

  const movieDetailsEl = document.createElement('div');
  movieDetailsEl.classList.add('movie-details');

  movieDetailsEl.innerHTML = `
  <div class="qwqw container justify-content-between d-flex">
  <div class="col-3">
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    </div>
    <div class="col-8 movie-infotkt">
      <h2>${title}</h2>
      <span>IMDB: ${vote_average}</span>
      <p>${overview}</p>
    </div>
    </div>
  `;

  const backButton = document.createElement('button');
  backButton.innerText = 'უკან დაბრუნება';
  backButton.classList.add('back-button');
  backButton.addEventListener('click', () => {
    getMovies(API_URL);
  });

  movieDetailsEl.appendChild(backButton);
  main.appendChild(movieDetailsEl);
}



