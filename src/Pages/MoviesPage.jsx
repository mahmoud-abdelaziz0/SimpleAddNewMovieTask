import React, { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { movieContext } from "../Context/MoviesContextProvider";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const { newMovie } = useContext(movieContext);
  console.log("from moviesPage", newMovie);

  useEffect(() => {
    fetch("http://localhost:1000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <div className="paretn flex justify-evenly my-5 flex-wrap ">
        {movies.map((movie) => (
          <div
            key={uuid()}
            className="bg-sky-100 mx-2 my-5 text-center w-[300px] rounded-xl relative shadow-md shadow-neutral-900"
          >
            <img src={movie.image} alt="" className="w-full rounded-xl" />
            <div className="text absolute bottom-0 text-center bg-black bg-opacity-85 w-full start-0 rounded-xl h-[30%] text-white">
              <h2 className="text-xl font-semibold pt-2 text-indigo-500">
                {movie.title}
              </h2>
              <h2 className="text-md font-semibold mt-5 bg-indigo-500 text-white p-1 w-[15%] mx-auto rounded-md">
                {movie.rating}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesPage;
