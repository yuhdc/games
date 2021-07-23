import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyle";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path={["/game/:id", "/"]}>
          <Home id="main" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
