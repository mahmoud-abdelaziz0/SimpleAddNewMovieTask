import { useContext, useState } from "react";
import { movieContext } from "../Context/MoviesContextProvider";
import { useNavigate } from "react-router-dom";

const AddMoviePage = () => {
  const [moviedata, setMovieData] = useState({
    image: "",
    title: "",
    rating: "",
  });

  const navigate = useNavigate();

  const { addMovie } = useContext(movieContext);

  const handelChanges = (event) => {
    // console.log(event.target.value);
    setMovieData({ ...moviedata, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addMovie(moviedata);

    try {
      await fetch("http://localhost:1000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(moviedata),
      });
    } catch (error) {
      console.error("Error", error);
    }

    navigate("/home");
  };

  // console.log(moviedata);

  return (
    <>
      <div className="formContainer w-[30%] mx-auto my-24">
        <form
          action=""
          className="flex flex-col justify-center "
          onSubmit={handleSubmit}
        >
          <label htmlFor="">ImageURL</label>
          <input
            onChange={handelChanges}
            type="text"
            name="image"
            value={moviedata.image}
            className="bg-white bg-opacity-0 border-2 border-indigo-500 rounded-lg p-2 mb-5 mt-1 caret-indigo-500"
          />
          <label htmlFor="">MovieTitle</label>
          <input
            onChange={handelChanges}
            type="text"
            name="title"
            value={moviedata.title}
            className="bg-white bg-opacity-0 border-2 border-indigo-500 rounded-lg p-2 mb-5 mt-1 caret-indigo-500"
          />
          <label htmlFor="">MovieRating</label>
          <input
            onChange={handelChanges}
            type="number"
            name="rating"
            value={moviedata.rating}
            className="bg-white bg-opacity-0 border-2 border-indigo-500 rounded-lg p-2 mb-5 mt-1 caret-indigo-500"
          />

          <input
            type="submit"
            value="Add Movie"
            className="cursor-pointer bg-indigo-400 w-[35%] mx-auto py-2 rounded-full"
          />
        </form>
      </div>
    </>
  );
};

export default AddMoviePage;
