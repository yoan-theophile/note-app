export interface BaseNoteInterface {
  id: string;
  title: string;
  body: string;
  favorite?: boolean;
}

export interface NoteInterface extends BaseNoteInterface {
  handleClickOpenEditDialog: () => void;
  handleClickOpenDeleteDialog: () => void;
}

export interface EditNoteInterface {
  open: boolean;
  selectedNote: BaseNoteInterface;
  onClose: (note: BaseNoteInterface) => void;
}
