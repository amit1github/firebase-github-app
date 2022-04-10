import React, { useState, useEffect } from "react";
import Axios from "axios";

import { Grid, Typography } from "@mui/material";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <Grid container>
      {repos.map((repo) => (
        <Grid item key={repo.id}>
          <Typography gutterBottom variant="h5" color="text.primary">
            {repo.name}
          </Typography>
          <Typography gutterBottom variant="h6" color="text.secondary">
            {repo.language}
          </Typography>
          <Typography gutterBottom variant="h6" color="text.success">
            {repo.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Repos;
