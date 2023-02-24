import * as React from "react";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuListPrimary from "../menu/MenuListPrimary";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link as LinkMui } from "@mui/material";
// import { useContext, useState } from "react";
// import { listContext } from "../../pages/WomenContex";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import SignIn from "./SignIn";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [menuState, setMenuState] = React.useState(false);
  // const newTitle = useContext(listContext);
  // console.log(newTitle);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: 100,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "80%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "14ch",
        "&:focus": {
          width: "14ch",
        },
      },
    },
  }));

  // function SearchAppBar() {
  //   return (
  //     <Box sx={{ flexGrow: 1 }}>
  //       <AppBar position="static">
  //         <Toolbar>
  //           <IconButton
  //             size="large"
  //             edge="start"
  //             color="inherit"
  //             aria-label="open drawer"
  //             sx={{ mr: 2 }}
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Typography
  //             variant="h6"
  //             noWrap
  //             component="div"
  //             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
  //           >
  //             MUI
  //           </Typography>
  //         </Toolbar>
  //       </AppBar>
  //     </Box>
  //   );
  // }

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMouseOver = () => {
    setMenuState(!menuState);
    console.log("Parent", menuState);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              Home
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton> */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Link to="/todo">
                  <Typography textAlign="center">Todos</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/sportswear">
                  <Typography textAlign="center">SportsWear</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/todo">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Typography textAlign="center">Todos</Typography>
              </Button>
            </Link>
            <Link to="/sportswear">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Typography textAlign="center">SportsWear</Typography>
              </Button>
            </Link>
            <Link to="/men">
              <Button
                // onClick={handleMouseOver}
                // onMouseOver={handleMouseOver}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography textAlign="center">Men</Typography>
              </Button>
            </Link>
            <Link to="/women">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Typography textAlign="center">Women</Typography>
              </Button>
            </Link>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase inputProps={{ "aria-label": "search" }} />
            </Search>

            <Link to="/cart">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Typography textAlign="center" style={{ float: "right" }}>
                  Cart Items
                  <AddShoppingCartIcon />
                </Typography>
              </Button>
            </Link>

            {/* {/* <Link to="/login">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                <Typography textAlign="center">Sign In</Typography>
              </Button>
            </Link> */}
          </Box>
          <LinkMui
            sx={{ my: 2, color: "white", display: "block" }}
            to="/login"
            component={Link}
          >
            Login
          </LinkMui>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                {/* <Link to="/todo">
                  <Typography textAlign="center">Todos</Typography>
                </Link> */}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        <MenuListPrimary menuState={menuState} />
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
