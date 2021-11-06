import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Movie from "./components/Movie";
import Anime from "./components/Anime";
import { Route, Switch } from "react-router-dom";
import Support from "./components/Support";
import react from "react";
import Details from "./components/Details";
export const appContext = react.createContext();
const App = () => {
  return (
    <appContext.Provider value={"Hello"}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/movie" component={Movie} />
          <Route exact path="/anime" component={Anime} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/:title" component={Details} />
        </Switch>
      </div>
    </appContext.Provider>
  );
};

export default App;
