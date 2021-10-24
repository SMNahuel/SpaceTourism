import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Crew from "./pages/Crew/Crew";
import Destination from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import Technology from "./pages/Technology/Technology";


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/crew" >
            <Crew />
          </Route>
          <Route exact path="/destination" >
            <Destination />
          </Route>
          <Route path="/technology" >
            <Technology />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
