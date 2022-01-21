import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { DeleteNoteInterface } from "./Note.interface";
import {
  Button,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";

export default function DeleteNote({
  onClose,
  selectedNote,
  open,
}: DeleteNoteInterface): JSX.Element {
  const handleClose = () => {
    onClose(false);
  };

  const deleteNote = () => {
    onClose(true);

  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Delete note - {selectedNote.title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Do you really want to delete this note?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          color="error"
          onClick={deleteNote}
          disableElevation
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
