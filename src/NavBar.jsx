import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import img from "./image/popcorn2.svg";

const Home = () => {
  return (
    <Box>
      <AppBar sx={{ bgcolor: "indigo" }}>
        <Toolbar>
          <Typography component={"span"} variant={"body2"}>
            <div className='home-bar'>
              <h2>GALLERIA</h2>
              <div className='logo'>
                <img src={img} height={75} />
              </div>
              <ul className='navbar mt-3'>
                <NavLink to='/'>
                  <li className='nav-li'>Movies</li>
                </NavLink>
                <NavLink to='/tvshows'>
                  <li className='nav-li'>TVShows</li>
                </NavLink>
                <NavLink to='/genre'>
                  <li className='nav-li'>Genres</li>
                </NavLink>
              </ul>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Home;
