import React from "react";
// import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";

const SearchBox = (props) => {
  // const [searchValue, setSearchValue] = useState("");
  // console.log(searchValue);
  const navigate = useNavigate();
  const toComponent = (e) => {
    navigate("/", { state: { svalue: e.target.value, name: "swaraj" } });

    // setSearchValue((e) => e.target.value);

    // console.log(searchValue);
    // console.log(e.target.value);
  };

  return (
    <div className='search-box'>
      {/* <NavLink to='/'> */}
      <input
        className='form-control'
        // value={props.value}
        // onChange={toComponent}
        placeholder='Search...'
      />

      <div className='searchIcon'></div>
      {/* </NavLink> */}
    </div>
  );
};

export default SearchBox;

// (event) => setSearchValue(event.target.value)
