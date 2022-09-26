import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavLink } from "react-router-dom";
import MovieBox from "./MovieBox";
import { ConstructionOutlined } from "@mui/icons-material";
// import MovieBox from "./MovieBox";

// import { Button } from "@mui/material";
// import Box from "@mui/material";
const API_GENRE =
  "https://api.themoviedb.org/3/discover/movie?api_key=23c20811e74b5ca13481b1fc83ef5376";
// "https://api.themoviedb.org/3/trending/all/day?api_key=23c20811e74b5ca13481b1fc83ef5376";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [mgenre, setMgenre] = useState();
  const [mdata, setData] = useState("");

  function pageNext() {
    console.log("next");
    setPageNum((prev) => prev + 1);
  }

  function pagePrev() {
    setPageNum((prev) => prev - 1);
  }
  const setSelcted = (number) => {
    setMgenre(number);
    console.log("setselcted clicked");
  };

  const handlGenre = (e) => {
    // console.log("hello");
    console.log(e.target.value);
    setData(e.target.value);

    // console.log(parseInt(mdata));
  };

  const hello = () => {
    console.log("hello1");
  };
  const hello2 = () => {
    console.log("hello2");
  };

  const handleCLick = (e, number) => {
    handlGenre(e);
    // console.log(e.target.value);
    console.log(number);
    setSelcted(number);

    hello2();
  };

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
  // console.log(movies);
  // console.log(mdata);

  //   genre_ids[0];
  //   console.log(movies.genre_ids[0]);

  return (
    <div className='container'>
      <div>
        <button className='page-btn' onClick={pagePrev}>
          <span>prev</span>
        </button>
        <button className='page-btn' onClick={pageNext}>
          <span>next</span>
        </button>
      </div>
      <div className='genre-tags'>
        <button
          className={mgenre === 1 ? "selectedTag" : "tags"}
          // className='tags'
          value='35'
          // onClick={(e) => {
          //   handleCLick(e, 1);
          // }}

          onClick={(e) => {
            handlGenre(e);
            setSelcted(1);
          }}
        >
          Comedy
        </button>
        <button
          className={mgenre === 2 ? "selectedTag" : "tags"}
          value='53'
          // onClick={(e) => {
          //   handleCLick(e, 2);
          // }}

          onClick={(e) => {
            handlGenre(e);
            setSelcted(2);
          }}
        >
          Action
        </button>
        <button
          className={mgenre === 3 ? "selectedTag" : "tags"}
          value='14'
          onClick={(e) => {
            handlGenre(e);
            setSelcted(3);
          }}
        >
          Fantasy
        </button>
        <button
          className={mgenre === 4 ? "selectedTag" : "tags"}
          value='27'
          onClick={(e) => {
            handlGenre(e);
            setSelcted(4);
          }}
        >
          Horror
        </button>
        <button
          className={mgenre === 5 ? "selectedTag" : "tags"}
          value='36'
          onClick={(e) => {
            handlGenre(e);
            setSelcted(5);
          }}
        >
          History
        </button>
        <button
          className={mgenre === 6 ? "selectedTag" : "tags"}
          value='10402'
          onClick={(e) => {
            handlGenre(e);
            setSelcted(6);
          }}
        >
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
                <NavLink
                  to={`/details/${item.id}`}
                  onClick={`/details/${pageNum}`}
                >
                  <div className='card'>
                    {/* <h1>{item.title}</h1> */}
                    <img
                      className='movies-image'
                      src={API_IMG + item.poster_path}
                    />

                    {/* item.genre_ids was giving a array, JSON converted array into string, and parseInt converted string into int */}
                  </div>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Movie;
