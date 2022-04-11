import React, { useState, useEffect } from "react";
import Axios from "axios";

import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
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
    <List sx={{ width: "100%" }}>
      {repos.map((repo) => (
        <ListItem  key={repo.id}>
          <ListItemText
            primary={repo.name}
            gutterBottom
            variant="h5"
            color="text.primary"
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {repo.language}
                </Typography>
                {repo.description}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Repos;
