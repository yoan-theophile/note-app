import React, { useState } from "react";
import { NoteInterface } from "./Note.interface";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Tooltip } from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";

export default function Note({
  title,
  body,
  favorite,
  handleClickOpenEditDialog,
  handleClickOpenDeleteDialog,
}: NoteInterface): JSX.Element {
  const [bodyMaxLength] = useState<number>(250);

  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
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
        <Button size="small" onClick={() => handleClickOpenEditDialog()}>
          Edit
        </Button>
        <Button
          size="small"
          color="error"
          onClick={() => handleClickOpenDeleteDialog()}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
