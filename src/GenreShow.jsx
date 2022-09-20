import { Button } from "bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieBox from "./MovieBox";

// import { Button } from "@mui/material";
// import Box from "@mui/material";
const API_GENRE =
  "https://api.themoviedb.org/3/discover/movie?api_key=23c20811e74b5ca13481b1fc83ef5376";

// const API_IMG = "https://image.tmdb.org/t/p/w500/";
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

function GenreShow() {
  const [mdata, setData] = useState(undefined);
  const [movies, setMovies] = useState([]);

  const handlGenre = (genre) => {
    console.log(genre);
    setData(genre);
    // console.log(parseInt(mdata));
  };

  useEffect(() => {
    axios
      .get(`${API_GENRE}${mdata ? `genre=${mdata}` : ""}`)
      .then((res) => res)
      .then((data) => {
        setMovies(data.data.results);
      });
  }, [mdata]);
  console.log(movies);

  //   genre_ids[0];
  //   console.log(movies.genre_ids[0]);

  return (
    <div className='container'>
      <div>
        <button
          className='page-btn'
          id='35'
          onClick={() => {
            handlGenre("comedy");
          }}
        >
          comedy
        </button>
      </div>
      <div className='grid'>
        {movies
          ?.filter((item) => {
            // console.log(item);
            if (item.id === 35) {
              return item;
            } else {
              return item;
            }
          })
          .map((item) => {
            // <MovieBox key={item.id} {...item} />;
            return (
              <div className='card'>
                <h1>{item.title}</h1>;
                {/* <img className='movies-image' src={API_IMG + poster_path} /> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default GenreShow;
