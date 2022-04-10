import React, { useContext, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import { Container, TextField, Button } from "@mui/material";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  let navigate=useNavigate()

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log(data);
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  //Todo: Fixing errors by looking into console
  //Put anypage behind login

  if (!context.user?.uid) {
    return navigate('/signin')
  }

  //Todo: styling part

  return (
    <Container sx={{mt: 5, maxWidth: "100%"}}>
      <TextField
        focused
        color="secondary"
        label="Please provide the username"
        variant="standard"
        value={query}
        onChange={e => setQuery(e.target.value)}
        sx={{ maxWidth: "900" }}
      />
      <Button onClick={fetchDetails} variant="contained" sx={{ml: 2}}>Fetch User</Button>
    {user ? <UserCard user={user} />: null}
    <Container>
      {user ? <Repos repos_url={user.repos_url} /> : null}
    </Container>
    </Container>
  );
};

export default Home;
