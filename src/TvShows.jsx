import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TvBox from "./TvBox";
import "./App.css";

const API_TV =
  "https://api.themoviedb.org/3/tv/popular?api_key=23c20811e74b5ca13481b1fc83ef5376";

function TvShows() {
  const [tvShows, setShows] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  function pageNext() {
    console.log("next");
    setPageNum((prev) => prev + 1);
  }

  function pagePrev() {
    console.log("previous");
    setPageNum((prev) => prev - 1);
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
      <div>
        <button className='page-btn mb-4' onClick={pagePrev}>
          previous
        </button>
        <button className='page-btn' onClick={pageNext}>
          next
        </button>
      </div>
      <div className='grid'>
        {tvShows?.map((tvReq) => (
          <TvBox key={tvReq.id} {...tvReq} />
        ))}
      </div>
    </div>
    // <> TO RENDER THE CONTENT IN THE SAME PAGE (OPTION 2)
    //   {
    //     tvshows.map((item) => {
    //       return (
    //         <>
    //           <h1>{item.name}</h1>
    //         </>
    //       );
    //     })

    //   }
    // </>
  );
}

export default TvShows;
