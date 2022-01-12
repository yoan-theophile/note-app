import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { EditNoteInterface } from "./Note.interface";

export default function EditNote({
  onClose,
  selectedNote,
  open,
}: EditNoteInterface): JSX.Element {
  const handleClose = () => {
    onClose({ id: "", title: "", body: "" });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Edit note - {selectedNote.title}</DialogTitle>
    </Dialog>
  );
}

