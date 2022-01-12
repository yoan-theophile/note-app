import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Tooltip } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";

interface Props {
  id: string;
  title: string;
  body: string;
  favorite?: boolean;
}

export default function ImgMediaCard({
  title,
  body,
  favorite,
}: Props): JSX.Element {
  const [bodyMaxLength] = useState<number>(250);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body.slice(0, bodyMaxLength)}
          {body.length > bodyMaxLength && " ..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title={favorite ? "Remove from favorite" : "Add to favorite"}>
          <IconButton size="small" onClick={() => {}}>
            {favorite ? <Favorite /> : <FavoriteBorderOutlined />}
          </IconButton>
        </Tooltip>
        <Button size="small">Edit</Button>
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
