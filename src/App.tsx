import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/home" component={Home} />
              {/*<Route path="/foo" component={Foo} />
              <Route path="/bar" component={Bar} />*/}
            </Switch>
          </div>
        </Router>
  );
}

export default App;
