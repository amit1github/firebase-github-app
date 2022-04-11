import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid item xl={4} lg={4} md={6} sm={6}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={user.avatar_url}
            alt="avatar git user"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" color="secondary">
              {user.name}
            </Typography>
            <Typography gutterBottom variant="body1" color="secondary">
              {user.location}
            </Typography>
            <Typography gutterBottom variant="body1" color="secondary">
              {user.bio}
            </Typography>
            <Typography gutterBottom variant="body1" color="info">
              Available for hire: {user.hireable ? "YES" : "NOPE"}
            </Typography>
            <Typography gutterBottom variant="body1" color="warning">
              Followers {user.followers}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserCard;
