import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVedio } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVedio = (movieId) => {
  const dispatch = useDispatch();
  const trilerVedio = useSelector((store) => store.movies.trailerVedio);
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const FilteredData = json.results.filter(
      (video) => video.name === "Official Trailer"
    );

    const trailer = FilteredData.length ? FilteredData[0] : json.results[0];
    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    !trilerVedio && getMovieVideos();
  }, []);
};

export default useTrailerVedio;
