import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={user.avatar_url}
        alt="avatar git user"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="text.primary">
          {user.name}
        </Typography>
        <Typography gutterBottom variant="h5" color="text.secondary">
          {user.location}
        </Typography>
        <Typography gutterBottom variant="h5" color="text.secondary">
          {user.bio}
        </Typography>
        <Typography gutterBottom variant="h5" color="text.warning">
          Available for hire: {user.hireable ? "YES" : "NOPE"}
        </Typography>
        <Typography gutterBottom variant="h5" color="text.success">
          Followers {user.followers}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
