import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
  async render() {
    return `
        <h2>Upcoming Page</h2>
        <h2 class="content__heading">Upcoming in Cinema</h2>
        <div id="movies" class="movies">
        </div>
        `;
  },

  async afterRender() {
    // setelah render
    const movies = await TheMovieDbSource.upcomingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
