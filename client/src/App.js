import "./App.css";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Movies from "./components/Movies";
import Anime from "./components/Anime";
import { Route, Switch } from "react-router-dom";
import Support from "./components/Support";
import react from "react";
import Details from "./components/Details";
import Favourite from "./components/Favourite";
import MoviesVotes from "./components/MoviesVotes";
export const appContext = react.createContext();
const App = () => {
  return (
    <appContext.Provider value={"Hello"}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/anime" component={Anime} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/details/:title" component={Details} />
          <Route exact path="/favourite" component={Favourite} />
          <Route exact path="/votes" component={MoviesVotes} />
        </Switch>
      </div>
    </appContext.Provider>
  );
};

export default App;
