import React from "react";
import { Typography, Grid, Avatar, Paper, Box } from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Box elevation={4} sx={{ }}>
      <Grid container sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        <Grid item xl={4} sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pr: 2
        }}>
          <Avatar
            height="140"
            src={user.avatar_url}
            alt="avatar git user"
            sx={{ width: 100, height: 100 }}
          />
        </Grid>

        <Grid item xs={4}>
          <Typography gutterBottom variant="h6" color="primary">
            Name: {user.name}
          </Typography>
          <Typography gutterBottom variant="body1" color="secondary">
            Country: {user.location}
          </Typography>
          <Typography gutterBottom variant="body2" color="secondary">
            BIO: {user.bio}
          </Typography>
          {/* <Typography gutterBottom variant="caption" color="info">
            Available for hire: {user.hireable ? "Yes" : "No"}
          </Typography>
          <br/> */}
          <Typography gutterBottom variant="caption" color="error">
            Followers: {user.followers}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserCard;
