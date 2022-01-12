import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { EditNoteInterface } from "./Note.interface";
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
}: EditNoteInterface): JSX.Element {
  const handleClose = () => {
    onClose({ id: "", title: "", body: "" });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Delete note - {selectedNote.title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Do you really want to delete this note?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button>Cancel</Button>
        <Button variant="contained" color="error" disableElevation>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
