import React from "react";
import NavBar from "./NavBar";
import GalleryView from "./GalleryView";
import TvShows from "./TvShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./DetailPage";

import "bootstrap/dist/css/bootstrap.min.css";
import GenreShow from "./GenreShow";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/details/:id' element={<DetailPage />} />
        <Route path='/' element={<GalleryView />} />
        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/genre' element={<GenreShow />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
