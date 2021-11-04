import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Movie from "./components/Movie";
import Anime from "./components/Anime";
import react, { useState, useContext, useReducer, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Support from "./components/Support";
export const appContext = react.createContext();
const App = () => {
  return (
    <appContext.Provider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/anime" component={Anime} />
          <Route exact path="/support" component={Support} />
        </Switch>
      </div>
    </appContext.Provider>
  );
};

export default App;
