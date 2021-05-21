import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Index from "./Pages/Index";

/** @Todo Cleanup The Code Create Exernal Files */
export type TogglerType = {
  toggle: boolean;
  setToggle: (args: boolean) => void;
};

export const EventContext = createContext<TogglerType>({
  toggle: false,
  setToggle: () => {},
});

export const useToggleEvents = () => useContext(EventContext);

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <EventContext.Provider value={{ toggle, setToggle }}>
      <Index />
    </EventContext.Provider>
  );
}

export default App;
