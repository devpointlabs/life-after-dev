import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import FetchUser from "./components/FetchUser";
import Project from "./pages/project/Project";
import UserSettings from "./components/UserSettings";
import LandingPage from "./UserPages/LandingPage";
import User from "./UserPages/User";

function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Container>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/project/:id" component={Project} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/user/:id" component={User} />
            <Route
              exact
              path="/profile/:id/settings"
              component={UserSettings}
            />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
