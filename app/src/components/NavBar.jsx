import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/">
          <Typography variant="h6" color="inherit" noWrap>
            CS Questions Website
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
