import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  CardActions
} from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../Config/firebaseConfig";

const Header = () => {
  const context = useContext(UserContext);

  const logout = async() => {
    await signOut(auth)
  }

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
          <Typography>
            {context.user?.email ? context.user.email : ""}
          </Typography>
          {context.user ? (
            <CardActions 
              onClick={() => {
                context.setUser(null);
              }}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Logout</Button>
            </CardActions>
            // <CardActions>
            //   <Button onClick={logout} color="inherit">Logout</Button>
            // </CardActions>
          ) : (
            <CardActions>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Signup</Button>
              </Link>
              <Link
                to="/signin"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Signin</Button>
              </Link>
            </CardActions>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
