import Navbar from "./Components/Nav";
import Home from "./Pages/Home";
import BlockPage from "./Pages/Blocks";
import Account from "./Pages/Account";

import { AppProvider } from "./Context/appContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/block/:blocknum" component={BlockPage} />
            <Route exact path="/account/:account" component={Account} />
          </Switch>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
