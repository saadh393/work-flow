export interface CreateTicketProps {
  eachNote?: NoteProvider;
  setEachNote: (args?: any) => void;
  keyevent: (arg?: any) => void;
  handleChange: (arg?: any) => void;
}

export interface NoteProvider {
  id: number | null;
  checked?: boolean;
  note?: string | undefined;
}

export interface ShowTickProps {
  SavedData: NoteProvider;
  updateCheck: (checked: boolean, id: number | null) => void;
  updateNote: (note: string, id: number | null) => void;
}

export interface ModalVisibility {
  isVisible: boolean;
  setIsVisible: (args?: any) => void;
}

export interface ImagePreview {
  image: any;
  setimage: (args?: any) => void;
}

export interface UploadInputHandler {
  handleUploadEvent: (args?: any) => void;
  handleFileDrop: (args?: any) => void;
  handleDragOver: (args?: any) => void;
  handleChoosenFile: (args?: any) => void;
  fileRef: any;
  fileUpload: any;
}
