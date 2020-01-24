import React from "react";
import "./App.css";
import { AppProvider } from "./AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import { NavBar } from "./Pages/NavBar";

// Pages
import { MakeATeam } from "./Pages/MakeATeam";
import { News } from "./Pages/News";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { PlayersSearch } from "./Pages/PlayersSearch";
import { PlayerInfo } from "./Pages/PlayerInfo";

function App() {
  return (
    <AppProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/MakeATeam" component={MakeATeam} />
          <Route path="/News" component={News} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Players/Search" component={PlayersSearch} />
          <Route path="/Player/:playerID" component={PlayerInfo} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
