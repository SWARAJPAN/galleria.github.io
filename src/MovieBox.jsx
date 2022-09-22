import { Modal } from "bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
// import useNavigate from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = (
  { id, genre_ids, title, poster_path, vote_average, release_date, overview },
  pageNum
) => {
  return (
    <NavLink to={`/details/${id}`}>
      <div className='card '>
        {/* <h1 className='title'>{title}</h1> */}
        {/* <p>Released on: {release_date}</p> */}
        <img className='movies-image' src={API_IMG + poster_path} />

        {/* <p>Overview: {overview}</p> */}
        {/* <p>Rating: {vote_average}</p> */}
      </div>

      {/* <h1>{genre_ids[0]}</h1> */}
    </NavLink>
  );
};

export default MovieBox;
