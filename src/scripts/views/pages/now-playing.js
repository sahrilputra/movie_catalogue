import TheMovieDbSource from '../../data/themoviedb-source';
// eslint-disable-next-line import/named
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
        <h2>Now Playing</h2>
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies">
        </div>
        `;
  },

  async afterRender() {
    // setelah render
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPlaying;
