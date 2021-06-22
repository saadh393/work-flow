import { createContext, useContext, useState } from "react";
import "./App.css";
import Index from "./Pages/Index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Note from "./Components/MainContent/Note/Note";
import { useEffect } from "react";

/** @Todo Cleanup The Code Create Exernal Files */
export type TogglerType = {
  toggle: boolean;
  setToggle: (args: boolean) => void;

  todos: object[];
  setTodo: (args: any) => void;

  user: any;
  setUser: (args: any) => void;
};

export const EventContext = createContext<TogglerType>({
  toggle: false,
  setToggle: () => {},

  todos: [],
  setTodo: () => {},

  user: {},
  setUser: () => {},
});

export const useToggleEvents = () => useContext(EventContext);

function App() {
  const [toggle, setToggle] = useState(false);
  const [todos, setTodo] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({ name: "Anonymous", email: "test@email.com" });
  }, []);

  return (
    <EventContext.Provider value={{ toggle, setToggle, todos, setTodo, user, setUser }}>
      <BrowserRouter>
        <Index />
        <Switch>
          <Route path='/note/:Noteid'>
            <Note />
          </Route>
        </Switch>
      </BrowserRouter>
    </EventContext.Provider>
  );
}

export default App;
