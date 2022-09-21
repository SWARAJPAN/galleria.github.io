import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import MovieBox from "./MovieBox";

// import { Button } from "@mui/material";
// import Box from "@mui/material";
const API_GENRE =
  "https://api.themoviedb.org/3/discover/movie?api_key=23c20811e74b5ca13481b1fc83ef5376";
// "https://api.themoviedb.org/3/trending/all/day?api_key=23c20811e74b5ca13481b1fc83ef5376";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

function Movie() {
  const [mdata, setData] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  function pageNext() {
    console.log("next");
    setPageNum((prev) => prev + 1);
  }

  function pagePrev() {
    setPageNum((prev) => prev - 1);
  }

  const handlGenre = (e) => {
    // console.log(e.target.value);
    setData(e.target.value);
    // console.log(parseInt(mdata));
  };
  const tages = document.getElementsByClassName("tags");
  console.log(tages.innerHTML);
  //   const clicked= false;
  //   const HandleActive = ()=>{

  //     if(clicked==false){
  //       tages.classList.add('')
  //     }

  //   }

  useEffect(() => {
    console.log(pageNum);
    axios
      // .get(`${API_GENRE}${mdata ? `genre=${mdata}` : ""}`)
      .get(API_GENRE + `&with_genres=${mdata}` + `&page=${pageNum}`)
      //   .then((res) => res)
      .then((data) => {
        setMovies(data.data.results);
        console.log(data.data.results);

        // ${mdata ? `genre=${mdata}` : ""}`
      });
  }, [mdata, pageNum]);
  console.log(movies);
  console.log(mdata);

  //   genre_ids[0];
  //   console.log(movies.genre_ids[0]);

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
      <div className='genre-tags'>
        <button className='tags' value='35' onClick={handlGenre}>
          Comedy
        </button>
        <button className='tags' value='53' onClick={handlGenre}>
          Action
        </button>
        <button className='tags' value='14' onClick={handlGenre}>
          Fantasy
        </button>
        <button className='tags' value='27' onClick={handlGenre}>
          Horror
        </button>
        <button className='tags' value='36' onClick={handlGenre}>
          History
        </button>
        <button className='tags' value='10402' onClick={handlGenre}>
          Music
        </button>
      </div>

      <div className='grid'>
        {movies
          .filter((item) => {
            // console.log(item);
            if (mdata == "") {
              return item;
            } else {
              for (var i = 0; i < 3; i++) {
                if (parseInt(JSON.stringify(item.genre_ids[i])) == mdata)
                  return item;
              }
            }

            //
          })
          .map((item) => {
            return (
              <div>
                <div className='card'>
                  {/* <h1>{item.title}</h1> */}
                  <img
                    className='movies-image'
                    src={API_IMG + item.poster_path}
                  />
                  {/* item.genre_ids was giving a array, JSON converted array into string, and parseInt converted string into int */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Movie;
