import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import Navbar from "./components/navbar";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1";

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className="bg-black pb-10">
        <Navbar />
        <Banner />
        <MovieList title={"Phim Hot"} data={movie} />
        <MovieList title={"Phim Đề Cử"} data={movieRate} />
      </div>
    </>
  );
}

export default App;