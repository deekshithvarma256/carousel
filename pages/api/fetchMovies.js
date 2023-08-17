export async function fetchMovies() {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
  
    const response = await fetch(url);
    const data = await response.json();
    const topTenMovies = data.results.slice(0, 10);
    return topTenMovies;
  }