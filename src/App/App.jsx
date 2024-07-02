import { Suspense, lazy } from "react";
// import Footer from "../Components/Footer/Footer";
// import NavBar from "../Components/NavBar/NavBar";
// import AddMoviePage from "../Pages/AddMoviePage";
// import MoviesPage from "../Pages/MoviesPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../Components/AppLayout/AppLayout";
import NotFound from "../Components/NotFound/NotFound";
import MoviesContextProvider from "../Context/MoviesContextProvider";

const Footer = lazy(() => import("../Components/Footer/Footer"));
const NavBar = lazy(() => import("../Components/NavBar/NavBar"));
const AddMoviePage = lazy(() => import("../Pages/AddMoviePage"));
const MoviesPage = lazy(() => import("../Pages/MoviesPage"));

function App() {
  return (
    <>
      <MoviesContextProvider>
        <Suspense>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index={true} element={<MoviesPage />}></Route>
                <Route path="home" element={<MoviesPage />}></Route>
                <Route path="addMovie" element={<AddMoviePage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Suspense>
      </MoviesContextProvider>
    </>
  );
}

export default App;
