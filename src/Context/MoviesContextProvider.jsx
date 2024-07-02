import React, { createContext, useState } from "react";

export const movieContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [newMovie, setNewMovie] = useState({});

  const addMovie = (Data) => {
    setNewMovie(Data);
  };
  console.log(newMovie);

  return (
    <>
      <movieContext.Provider value={{ addMovie, newMovie }}>
        {children}
      </movieContext.Provider>
    </>
  );
};

export default MoviesContextProvider;
