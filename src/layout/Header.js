import React, { useContext } from "react";
import {
  AppBar,
  Container,
  Menu,
  MenuItem,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuRounded />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography variant="h6" component="div">
                Github-firebase-app
              </Typography>
            </Link>
          </Box>
          {/* todo context */}
          <Typography >
            {" "}
            {context.user?.email ? context.user.email : ""}{" "}
          </Typography>
          {context.user ? (
            <Link to="/logout" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Logout</Button>
            </Link>
          ) : (
            <>
              <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Signup</Button>
              </Link>
              <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Login</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
