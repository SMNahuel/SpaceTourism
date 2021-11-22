import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Crew from "./pages/Crew/Crew";
import Destination from "./pages/Destination/Destination";
import Home from "./pages/Home/Home";
import Technology from "./pages/Technology/Technology";

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./store/store";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/crew">
            <Crew />
          </Route>
          <Route exact path="/destination">
            <Destination />
          </Route>
          <Route path="/technology">
            <Technology />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
