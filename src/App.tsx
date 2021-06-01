import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Index from "./Pages/Index";

/** @Todo Cleanup The Code Create Exernal Files */
export type TogglerType = {
  toggle: boolean;
  setToggle: (args: boolean) => void;
  noteItems: object[];
  setNoteItem: (args: any) => void;
};

export const EventContext = createContext<TogglerType>({
  toggle: false,
  setToggle: () => {},
  noteItems: [],
  setNoteItem: () => {},
});

export const useToggleEvents = () => useContext(EventContext);

function App() {
  const [toggle, setToggle] = useState(false);
  const [noteItems, setNoteItem] = useState([]);

  return (
    <EventContext.Provider value={{ toggle, setToggle, noteItems, setNoteItem }}>
      <Index />
    </EventContext.Provider>
  );
}

export default App;
