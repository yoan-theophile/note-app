export interface BaseNoteInterface {
  id: string;
  title: string;
  body: string;
  favorite?: boolean;
}

export interface NoteInterface extends BaseNoteInterface {
  handleClickOpenEditDialog: (selectedNote: BaseNoteInterface) => void;
  handleClickOpenDeleteDialog: (selectedNote: BaseNoteInterface) => void;
  toggleFavorite: (id: string) => void;
}

export interface EditNoteInterface {
  open: boolean;
  selectedNote: BaseNoteInterface;
  onClose: (updated: boolean, note?: BaseNoteInterface) => void;
}

export interface DeleteNoteInterface {
  open: boolean;
  selectedNote: BaseNoteInterface;
  onClose: (response: boolean) => void;
}
