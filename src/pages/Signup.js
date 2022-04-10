import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LockOutlined } from "@mui/icons-material";
import { toast } from "react-toastify";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebaseConfig";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const context = useContext(UserContext);

  const theme = createTheme();
  let navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid }); //uid = userid
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return navigate('/')
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up / Register Form
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
              id="password"
              boolean="true"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signup;
