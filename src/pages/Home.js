import React, { useContext, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import { TextField, Button, Grid, Box } from "@mui/material";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  let navigate = useNavigate();

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log(data);
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  if (!context.user?.uid) {
    return navigate("/signin");
  }

  return (
    <>
      <Grid container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Grid item xs={3}>
          <TextField
            focused
            color="secondary"
            label="Please provide the username"
            variant="standard"
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={3} sx={{ padding: 1 }}>
          <Button
            onClick={fetchDetails}
            variant="contained"
            sx={{ display: "flex" }}
          >
            Fetch User
          </Button>
        </Grid>
      </Grid>

        <Box>{user ? <UserCard user={user} /> : null}</Box>
        <Box>{user ? <Repos repos_url={user.repos_url} /> : null}</Box>
    </>
  );
};

export default Home;
