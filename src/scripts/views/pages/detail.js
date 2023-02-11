import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';

const Detail = {
  async render() {
    return `
        <h2>Now Playing</h2>
        `;
  },

  async afterRender() {
    // setelah render();
    const url = UrlParser.parseActiveUrlWithCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);
  },
};
export default Detail;
