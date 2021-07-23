import { Route, Switch } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyle";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path={["/game/:id", "/"]}>
          <Home id="main" />
        </Route>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
