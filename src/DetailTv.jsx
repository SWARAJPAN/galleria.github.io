import { Details } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// function onClick
// const API_DETAILS =
// "https://api.themoviedb.org/3/movie/985939?api_key=23c20811e74b5ca13481b1fc83ef5376&with_genres";

function DetailPage() {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const API_URL =
    "https://api.themoviedb.org/3/tv/popular?api_key=23c20811e74b5ca13481b1fc83ef5376";
  const [movies, setMovies] = useState([0]);

  const params = useParams();
  // console.log(params.id);

  const [detail, setDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=23c20811e74b5ca13481b1fc83ef5376`
      )

      .then((data) => {
        setDetails(data.data);
        // console.log(data.data);
      });

    axios
      .get(API_URL)

      .then((data) => {
        setMovies(data.data.results);
        console.log(data.data.results);
      });
  }, [params.id]);
  // console.log(detail);
  // console.log(movies);

  const prevFunct = () => {
    const array = movies.map((item, index) => {
      return item.id;
    });
    const index = movies.findIndex((rank) => rank.id == params.id);

    console.log(array[index - 1]);

    navigate(`/detailtv/${array[index - 1]}`);

    console.log(index);
  };

  const nextFunct = () => {
    const array = movies.map((item, index) => {
      return item.id;
    });
    const index = movies.findIndex((rank) => rank.id == params.id);

    console.log(array[index + 1]);

    navigate(`/detailtv/${array[index + 1]}`);

    console.log(index);
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='row'>
          <div className='column'>
            <div className='detail-img'>
              <img
                className='movies-image'
                src={API_IMG + `${detail.poster_path}`}
              />
            </div>
          </div>
          <div className='column'>
            <h1>{detail.title}</h1>
            <h3>Rating: {detail.vote_average}</h3>
            <h4>Released on: {detail.release_date}</h4>
            <h6>Overview: {detail.overview}</h6>
            <div className='detail-btns'>
              <button className='detail-page-btn' onClick={prevFunct}>
                prev
              </button>
              <button className='detail-page-btn' onClick={nextFunct}>
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
