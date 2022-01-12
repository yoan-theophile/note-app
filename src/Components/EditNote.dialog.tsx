import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { EditNoteInterface } from "./Note.interface";
import { DialogContent, TextField, DialogActions, Button } from "@mui/material";

import * as Yup from "yup";
import { useFormik } from "formik";

export default function EditNote({
  onClose,
  selectedNote,
  open,
}: EditNoteInterface): JSX.Element {
  const handleClose = () => {
    onClose(false);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: selectedNote.title,
      body: selectedNote.body,
    },
    validationSchema: Yup.object().shape({
      title: Yup.string(),
      body: Yup.string(),
    }),
    onSubmit: (values: { title: string; body: string }) => {
      onClose(true, {
        id: selectedNote.id,
        title: values.title,
        body: values.body,
      });
    },
  });

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="md">
      <DialogTitle>Edit note - {selectedNote.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          variant="standard"
          fullWidth
          {...formik.getFieldProps("title")}
        />
        <TextField
          margin="dense"
          id="body"
          label="Note"
          type="text"
          variant="standard"
          rows={5}
          fullWidth
          multiline
          {...formik.getFieldProps("body")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => formik.handleSubmit()}
          variant="contained"
          color="info"
          disableElevation
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
