import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import MovieBox from "./MovieBox";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import SearchBox from "./SearchBox";
import { ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=23c20811e74b5ca13481b1fc83ef5376";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [search, setSearch] = useState([]);
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

  function handleChange(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
    console.log(search);
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
      <div className='search-btn-container'>
        <button className='page-btn' onClick={pagePrev}>
          <span>prev</span>
        </button>
        {/* <SearchBox /> */}
        <div className='search-box'>
          {/* <NavLink to='/'> */}
          <input
            className='form-control'
            // value={props.value}
            onChange={handleChange}
            placeholder='Search a Movie...'
          />

          <div className='searchIcon'></div>
          {/* </NavLink> */}
        </div>
        <button className='page-btn' onClick={pageNext}>
          <span>next</span>
        </button>
      </div>
      <div>
        <div className='grid'>
          {movies
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <>
                  <NavLink
                    to={`/details/${item.id}`}
                    onClick={`/details/${pageNum}`}
                  >
                    <div className='card'>
                      <img
                        className='movies-image'
                        src={API_IMG + item.poster_path}
                      />
                    </div>
                  </NavLink>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
