import { getAllGenres } from '../../src/lib/rawg';

export default async function handler(req, res) {
  const genres = await getAllGenres();
  //   console.log(genres.results);
  res.status(200).json(genres);
}
