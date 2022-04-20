import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Typography,
  Grid,
  Container,
  Paper,
} from "@mui/material";



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
    <Container sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={4}>
        {repos.map((repo) => (
          <Grid
            item
            key={repo.id}
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignText: "center",
            }}
          >
            <Paper>
              <Typography variant="body1" color="primary">
                Repo name: {repo.name}
              </Typography>
              <Typography variant="body2" color="secondary">
                Technology: {repo.language}
              </Typography>
              <Typography variant="body2" color="error">
                Description: {repo.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Repos;
