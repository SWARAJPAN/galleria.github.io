import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import img from "./image/popcorn2.svg";
import SearchBox from "./SearchBox";

const Home = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "indigo" }}>
        <Toolbar>
          <Typography component={"span"} variant={"body2"}>
            <div className='home-bar'>
              <h2>MOVIES</h2>
              <div className='logo'>
                <img src={img} height={75} />
              </div>
              <ul className='navbar mt-3'>
                <NavLink to='/'>
                  <li className='nav-li'>Gallery</li>
                </NavLink>
                <NavLink to='/tvshows'>
                  <li className='nav-li'>TVShows</li>
                </NavLink>
                <NavLink to='/genre'>
                  <li className='nav-li'>Genres</li>
                </NavLink>
                <SearchBox />
              </ul>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Home;
