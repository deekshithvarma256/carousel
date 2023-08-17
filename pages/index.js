import { fetchMovies } from "./api/fetchMovies";
import Carousel from "../components/Carousel";

export async function getServerSideProps() {
  const movies = await fetchMovies();
  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }) {
  return (
    <div>
      <ul>{movies.length > 0 && <Carousel items={movies} />}</ul>
    </div>
  );
}
