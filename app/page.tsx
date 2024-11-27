import PopularMovies from "@/app/components/movies/popular-movies";
import TopRatedMovies from "@/app/components/movies/top-rated-movies";

export default function Home() {
    return (
    <div>
        <PopularMovies/>
        <TopRatedMovies/>
    </div>
  );
}
