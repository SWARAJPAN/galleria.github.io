import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieBox from "./MovieBox";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBox from "./SearchBox";
import { ListItemText } from "@mui/material";
// import { BrowserRouter } from "react-router-dom";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=23c20811e74b5ca13481b1fc83ef5376";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  // const [data, setData] = useState("");

  // const location = useLocation();

  // console.log(location.state.svalue);
  // setData((item) => location, state.svalue);

  function pageNext() {
    console.log("next");
    setPageNum((prev) => prev + 1);
  }

  function pagePrev() {
    setPageNum((prev) => prev - 1);
  }

  useEffect(() => {
    console.log(pageNum);
    axios
      .get(API_URL + `&page=${pageNum}`)
      .then((res) => res)
      .then((data) => {
        // console.log(data);
        setMovies(data.data.results);
      });
  }, [pageNum]);
  return (
    <div className='container'>
      <div>
        <button className='page-btn' onClick={pagePrev}>
          <span>previous</span>
        </button>
        <button className='page-btn' onClick={pageNext}>
          <span>next</span>
        </button>
      </div>
      <div className='grid'>
        {movies?.map((movieReq) => (
          <MovieBox key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </div>
  );
}
// .filter((item) => {
//   if (item.title == data) {
//     return item;
//   } else {
//     return item;
//   }
// })
