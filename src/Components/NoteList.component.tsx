import React, { useEffect, useState } from "react";
import Note from "./Note.component";
import EditNote from "./EditNote.dialog";
import { BaseNoteInterface } from "./Note.interface";
import {
  Alert,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  SnackbarCloseReason,
  Toolbar,
  Typography,
  Icon,
  Button,
} from "@mui/material";
import DeleteNote from "./DeleteNote.dialog";
import { Favorite } from "@mui/icons-material";

const drawerWidth = 240;

export default function NoteList(): JSX.Element {
  const [noteList, setNoteList] = useState<BaseNoteInterface[]>([]);

  useEffect(() => {
    const newNoteList = localStorage.getItem("NOTE_APP_NOTES");
    if (newNoteList) {
      setNoteList(JSON.parse(newNoteList));
    }
  }, []);
  const [selectedNote, setSelectedNote] = useState<BaseNoteInterface>({
    id: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    localStorage.setItem("NOTE_APP_NOTES", JSON.stringify(noteList));
  }, [noteList]);

  const addNote = () => {
    const newId = String(Date.now());
    const newNote = {
      id: newId,
      title: "",
      body: "",
      favorite: false,
    };
    const newNoteList = [...noteList, newNote];
    setNoteList(newNoteList);
    handleClickOpenEditDialog(newNote);
  };

  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);

  const handleClickOpenEditDialog = (note: BaseNoteInterface) => {
    setOpenEditDialog(true);
    setSelectedNote(note);
  };

  const handleCloseEditDialog = (
    updated: boolean,
    noteUpdated?: BaseNoteInterface
  ) => {
    setOpenEditDialog(false);
    if (updated && noteUpdated) {
      setOpenSnackbar(true);
      const newNoteList = noteList.map((note) =>
        note.id === noteUpdated.id
          ? { ...noteUpdated, favorite: note.favorite }
          : note
      );
      setNoteList(newNoteList);
    }
    setSelectedNote({ id: "", title: "", body: "" });
  };

  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);

  const handleClickOpenDeleteDialog = (note: BaseNoteInterface) => {
    setOpenDeleteDialog(true);
    setSelectedNote(note);
  };

  const handleCloseDeleteDialog = (response: boolean) => {
    if (response) {
      setOpenSnackbar(true);
      const newNoteList = noteList.filter(({ id }) => id !== selectedNote.id);
      setNoteList(newNoteList);
    }
    setOpenDeleteDialog(false);
    setSelectedNote({ id: "", title: "", body: "" });
  };

  const toggleFavorite = (id: string) => {
    const newNoteList = noteList.map((note) =>
      note.id === id ? { ...note, favorite: !note.favorite } : note
    );
    setNoteList(newNoteList);
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCloseSnackbar = (
    event: Event | React.SyntheticEvent<any, Event>,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Grid container flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" noWrap component="div">
                Note App
              </Typography>
              <Button
                variant="outlined"
                onClick={addNote}
                sx={{ color: "#f0f0f0" }}
              >
                Add Note
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="text.secondary"
            >
              Favorites&nbsp;
            </Typography>
            <Icon>
              <Favorite />
            </Icon>
          </Toolbar>
          <Divider />
          <List>
            {noteList
              .filter(({ favorite }) => favorite)
              .map((note, index) => (
                <ListItem
                  button
                  key={note.title + index}
                  onClick={() => {
                    handleClickOpenEditDialog(note);
                  }}
                >
                  <ListItemText primary={note.title} />
                </ListItem>
              ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Grid container flexDirection="row" spacing={2}>
            {noteList.map(({ id, title, body, favorite }, index) => (
              <Grid item key={index}>
                <Note
                  id={id}
                  body={body}
                  title={title}
                  favorite={favorite}
                  handleClickOpenEditDialog={handleClickOpenEditDialog}
                  handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
                  toggleFavorite={toggleFavorite}
                />
              </Grid>
            ))}
            {noteList.length === 0 && (
              <Typography variant="body1" component="div">
                There is not any note at the moment. Click on the button ADD
                NOTE to add a new note.
              </Typography>
            )}
          </Grid>
        </Box>
      </Box>
      <EditNote
        selectedNote={selectedNote}
        open={openEditDialog}
        onClose={handleCloseEditDialog}
      />
      <DeleteNote
        selectedNote={selectedNote}
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{ width: "100%" }}
        >
          The operation was successful !
        </Alert>
      </Snackbar>
    </>
  );
}
