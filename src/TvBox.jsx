import React from "react";
import { NavLink } from "react-router-dom";
// import useNavigate from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const TvBox = ({
  id,
  name,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  return (
    <NavLink to={`/details/${id}`}>
      <div className='card '>
        {/* <h1 className='title'>{name}</h1> */}
        {/* <p>Released on: {release_date}</p> */}
        <img className='movies-image' src={API_IMG + poster_path}></img>
        {/* <p>Overview: {overview}</p> */}
        {/* <p>Rating: {vote_average}</p> */}
      </div>
    </NavLink>
  );
};

export default TvBox;
