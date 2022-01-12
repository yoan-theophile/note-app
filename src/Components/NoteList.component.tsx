import React, { useEffect, useState } from "react";
import Note from "./Note.component";
import EditNote from "./EditNote.dialog";
import { BaseNoteInterface } from "./Note.interface";
import { Grid } from "@mui/material";
import DeleteNote from "./DeleteNote.dialog";

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
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);

  const handleClickOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedNote({ id: "", title: "", body: "" });
  };

  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);

  const handleClickOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedNote({ id: "", title: "", body: "" });
  };
  return (
    <div>
      <Grid container flexDirection="row" spacing={2}>
        {noteList.map(({ id, title, body }, index) => (
          <Grid item key={index}>
            <Note
              id={id}
              body={body}
              title={title}
              handleClickOpenEditDialog={handleClickOpenEditDialog}
              handleClickOpenDeleteDialog={handleClickOpenDeleteDialog}
            />
          </Grid>
        ))}
      </Grid>
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
    </div>
  );
}
