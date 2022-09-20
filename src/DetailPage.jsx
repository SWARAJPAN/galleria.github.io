import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function DetailPage() {
  const params = useParams();
  console.log(params.id);

  // const [detail, setDetails] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(API_URL)
  //     .then((res) => res)
  //     .then((data) => {
  //       setDetails(data.data.results);
  //     });
  // }, []);

  return <div className='container'>DetailPage</div>;
}

export default DetailPage;
