export interface noteState {
  eachNote?: provider;
  setEachNote: (args?: any) => void;
  note?: any;
  keyevent: (arg?: any) => void;
}

export interface provider {
  checked?: boolean;
  note?: string | undefined;
}

export interface ShowTickProps {
  SavedData: provider;
}
