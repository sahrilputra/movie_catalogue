import TheMovieDbSource from '../../data/themoviedb-source';

const Upcoming = {
  async render() {
    return `
        <h2>Upcoming Page</h2>
        `;
  },

  async afterRender() {
    // setelah render
    const movies = await TheMovieDbSource.upcomingMovies();
    console.log(movies);
  },
};

export default Upcoming;
