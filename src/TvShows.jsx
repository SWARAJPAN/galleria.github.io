import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import TvBox from "./TvBox";
import "./App.css";
import { NavLink } from "react-router-dom";
// import SearchBox from "./SearchBox";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const API_TV =
  "https://api.themoviedb.org/3/tv/popular?api_key=23c20811e74b5ca13481b1fc83ef5376";

function TvShows() {
  const [tvShows, setShows] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [search, setSearch] = useState([]);

  function pageNext() {
    console.log("next");
    setPageNum((prev) => prev + 1);
  }

  function pagePrev() {
    console.log("previous");
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
      .get(API_TV + `&page=${pageNum}`)
      .then((res) => res)
      .then((data) => {
        console.log(data.data.results);
        setShows(data.data.results);
      });
  }, [pageNum]);

  // console.log(tvshows);
  return (
    <div className='container'>
      <div className='search-btn-container'>
        <button className='page-btn mb-4' onClick={pagePrev}>
          prev
        </button>
        {/* <SearchBox /> */}
        <div className='search-box'>
          {/* <NavLink to='/'> */}
          <input
            className='form-control'
            // value={props.value}
            onChange={handleChange}
            placeholder='Search a TV Show...'
          />

          <div className='searchIcon'></div>
          {/* </NavLink> */}
        </div>
        <button className='page-btn' onClick={pageNext}>
          next
        </button>
      </div>
      <div className='grid'>
        {tvShows
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })
          .map((item) => {
            return (
              <>
                <NavLink
                  to={`/detailtv/${item.id}`}
                  onClick={`/detailtv/${pageNum}`}
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
        {/* {tvShows?.map((tvReq) => (
          <TvBox key={tvReq.id} {...tvReq} />
        ))} */}
      </div>
    </div>
  );
}

export default TvShows;
